package com.pokemon.pokedex.Repository;

import com.pokemon.pokedex.Entity.PokemonEntity;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface PokemonRepository extends CrudRepository<PokemonEntity,Long> {
    @Modifying
    @Query(value = "INSERT INTO pokemon (id,nome) VALUE (:id,:nome)",nativeQuery = true)
    int SalvaPokemon(Long id, String nome);

}
