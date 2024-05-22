package com.pokemon.pokedex.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "pokemon")
public class PokemonEntity {

    @Id
    private Long id;

    @Column(name = "nome")
    private String name;

    public PokemonEntity() {

    }

    public PokemonEntity(Long id, String nome) {
        this.id = id;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return name;
    }

    public void setNome(String nome) {
        this.name = nome;
    }
}
