package com.datsystemz.search.springbootreactjsfullstack;

import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.datsystemz.search.springbootreactjsfullstack.models.Currency;
import com.datsystemz.search.springbootreactjsfullstack.repositories.CurrencyRepository;


@DataJpaTest
public class UserTests {

    @Autowired
    private CurrencyRepository currencyRepository;

    @Test
    public void testGetSymbol(){
        Currency currency = new Currency(
        		"bitcoin",
        		"1",
        	    "BTC",
        	    "Bitcoin",
        	      "18700256.0000000000000000",
        	      "21000000.0000000000000000",
        	      "1039589999261.5324619805454880",
        	      "30821679137.4325017652667248",
        	      "55592.2870393609831855",
        	      "-1.5115341552804766",
        	      "54849.2899827457411114",
        	      "https://blockchain.info/");
        
        currencyRepository.save(currency);
        currencyRepository.findById(new String())
                .map(newCurrency ->{
                    Assert.assertEquals("Bitcoin",newCurrency.getName());
                    return true;
                });
    }

    

    



}
