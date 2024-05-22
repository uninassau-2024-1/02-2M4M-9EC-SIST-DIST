package com.pokemon.pokedex.Controller;

import com.pokemon.pokedex.Entity.PokemonEntity;
import com.pokemon.pokedex.Service.APIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.yaml.snakeyaml.events.Event;

@RestController
@RequestMapping("/api")
public class APIController {
    @Autowired
    private APIService apiService;

    @GetMapping("/data/{ID}")
    public ResponseEntity<PokemonEntity> getData(@PathVariable long ID){
        PokemonEntity data = apiService.getData(ID);
        return ResponseEntity.ok(data);
    }
}
