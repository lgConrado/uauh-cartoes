import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Logo";
import estabelecimentos from "./estabelecimentos.json"; // Importação direta
import categorias from "./categorias.json"; // Importação direta
import marker1 from "../../assets/marker1.png"; // Marcador para Abastecimento
import marker2 from "../../assets/marker2.png"; // Marcador para Alimentação
import marker3 from "../../assets/marker3.png"; // Marcador para Multibeneficios

// Defina a interface para os dados do JSON
interface Estabelecimento {
  id: number;
  nome: string;
  nomeFantasia: string;
  cnpj: string;
  descricao: string | null; // Permite null
  cep: string;
  estado: string;
  cidade: string;
  bairro: string;
  endereco: string;
  numero: string;
  complemento: string | null; // Permite null
  latitude: string;
  longitude: string;
  email: string | null; // Permite null
  telefone: string | null; // Permite null
  site: string | null; // Permite null
  categoria: string;
  rede: string | null; // Permite null
}

const MapaRede = () => {
  const [estabelecimentosData, setEstabelecimentosData] = useState<Estabelecimento[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>("");
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox | null>(null);

  // Mapeamento de categorias para ícones
  const categoriasParaIcones: { [key: string]: string } = {
    "1": marker1, // Categoria 1 usa marker1
    "2": marker2, // Categoria 2 usa marker2
    "3": marker3, // Categoria 3 usa marker3
    "4": marker2, // Categoria 4 também usa marker1
    "5": marker2, // Categoria 5 também usa marker2
    "73": marker2, // Categoria 5 também usa marker2
    // Adicione mais mapeamentos conforme necessário
  };

  // Carregar os dados iniciais
  useEffect(() => {
    setEstabelecimentosData(estabelecimentos);
  }, []);

  // Inicializar o mapa e o campo de pesquisa
  useEffect(() => {
    const apiKey = ""; // Substitua pela sua chave de API
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;

    script.onload = () => {
      const mapElement = document.getElementById("map");

      // Verificar se o elemento do mapa existe
      if (
        mapElement &&
        window.google &&
        window.google.maps &&
        window.google.maps.places
      ) {
        const mapInstance = new window.google.maps.Map(mapElement, {
          center: { lat: -23.653080345826453, lng: -52.60374836030337 }, // Coordenadas iniciais
          zoom: 15,
        });

        const input = document.getElementById("search-input");

        // Verificar se o campo de pesquisa existe
        if (input) {
          const searchBoxInstance = new window.google.maps.places.SearchBox(
            input as HTMLInputElement
          );
          setSearchBox(searchBoxInstance);

          // Atualizar o mapa com os resultados da pesquisa
          searchBoxInstance.addListener("places_changed", () => {
            const places = searchBoxInstance.getPlaces();
            if (places.length > 0) {
              const bounds = new window.google.maps.LatLngBounds();
              places.forEach((place) => {
                if (place.geometry?.viewport) {
                  bounds.union(place.geometry.viewport);
                } else if (place.geometry?.location) {
                  bounds.extend(place.geometry.location);
                }
              });
              mapInstance.fitBounds(bounds); // Método fitBounds
            }
          });
        } else {
          console.error("Campo de pesquisa não encontrado.");
        }

        setMap(mapInstance);
      } else {
        console.error(
          "Elemento 'map' não encontrado ou biblioteca 'places' não carregada."
        );
      }
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Adicionar marcadores ao mapa
  useEffect(() => {
    if (!map || estabelecimentosData.length === 0) return;

    // Limpar marcadores anteriores
    const markers: google.maps.Marker[] = [];
    estabelecimentosData.forEach((estabelecimento) => {
      // Filtrar por categoria
      if (
        categoriaSelecionada &&
        estabelecimento.categoria !== categoriaSelecionada
      )
        return;

      // Converter latitude e longitude para números
      const lat = parseFloat(estabelecimento.latitude);
      const lng = parseFloat(estabelecimento.longitude);

      // Verificar se as coordenadas são válidas
      if (isNaN(lat) || isNaN(lng)) return;

      // Escolher o ícone do marcador com base na categoria
      const icon = categoriasParaIcones[estabelecimento.categoria] || null;

      const marker = new window.google.maps.Marker({
        position: { lat, lng },
        map: map,
        title: estabelecimento.nome,
        icon: icon,
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div>
            <strong>${estabelecimento.nomeFantasia}</strong>
            <p>${estabelecimento.endereco}, ${estabelecimento.numero}</p>
            <p>${estabelecimento.cidade}, ${estabelecimento.estado}</p>
            <p>Telefone: ${estabelecimento.telefone}</p>
          </div>
        `,
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });

      markers.push(marker);
    });

    // Limpar marcadores ao desmontar o componente
    return () => {
      markers.forEach((marker) => marker.setMap(null));
    };
  }, [map, estabelecimentosData, categoriaSelecionada]);

  return (
    <section className="mapa">
      <div className="mapa__logo">
        <Logo theme="azul" variant="cartoes" />
      </div>
      <div className="mapa__filtros">
        <select
          value={categoriaSelecionada}
          onChange={(e) => setCategoriaSelecionada(e.target.value)}
        >
          <option value="">Todas as Categorias</option>
          {categorias.map((categoria) => (
            <option key={categoria.id} value={categoria.id.toString()}>
              {categoria.nome}
            </option>
          ))}
        </select>
        <div className="mapa__busca">
          <input
            id="search-input"
            type="text"
            placeholder="Pesquisar endereço, cidade, etc."
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                // Disparar a busca ao pressionar Enter
                const input = document.getElementById("search-input") as HTMLInputElement;
                if (input && searchBox) {
                  searchBox.setBounds(map?.getBounds());
                  searchBox.setQuery(input.value);
                }
              }
            }}
          />
          <button
            className="mapa__lupa"
            onClick={() => {
              // Disparar a busca ao clicar no ícone
              const input = document.getElementById("search-input") as HTMLInputElement;
              if (input && searchBox) {
                searchBox.setBounds(map?.getBounds());
                searchBox.setQuery(input.value);
              }
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      <div className="mapa__mapa" id="map"></div>
    </section>
  );
};

export default MapaRede;