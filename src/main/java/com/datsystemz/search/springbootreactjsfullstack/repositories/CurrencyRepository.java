package com.datsystemz.search.springbootreactjsfullstack.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.datsystemz.search.springbootreactjsfullstack.models.Currency;

public interface CurrencyRepository extends CrudRepository<Currency, String>{

}
