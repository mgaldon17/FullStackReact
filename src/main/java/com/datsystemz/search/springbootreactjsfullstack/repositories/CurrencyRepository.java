package com.datsystemz.search.springbootreactjsfullstack.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.datsystemz.search.springbootreactjsfullstack.models.Currency;

@Repository
public interface CurrencyRepository extends JpaRepository<Currency, String>, 
											CrudRepository<Currency, String>{

}
