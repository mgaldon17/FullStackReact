package com.datsystemz.search.springbootreactjsfullstack.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.datsystemz.search.springbootreactjsfullstack.models.Currency;

public interface CurrencyRepository extends JpaRepository<Currency, String>{

}
