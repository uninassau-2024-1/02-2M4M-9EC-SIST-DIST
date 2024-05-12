package com.pokemon.pokedex.Service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.pokemon.pokedex.Entity.PokemonEntity;
import com.pokemon.pokedex.Repository.PokemonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class APIService {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private PokemonRepository pokemonRepository;

    public PokemonEntity getData(Long ID) {
        String url = "https://pokeapi.co/api/v2/pokemon-species/"+ID+"/";

        ResponseEntity<String> responseEntity = restTemplate.getForEntity(url, String.class);
        String jsonString = responseEntity.getBody();

        try {
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode jsonNode = objectMapper.readTree(jsonString);

            String speciesName = jsonNode.get("name").asText();

            pokemonRepository.SalvaPokemon(ID, speciesName);

            PokemonEntity pokemonEntity = new PokemonEntity();
            pokemonEntity.setNome(speciesName);

            return pokemonEntity;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
