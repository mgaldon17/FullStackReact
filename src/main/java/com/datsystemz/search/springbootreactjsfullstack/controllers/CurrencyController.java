package com.datsystemz.search.springbootreactjsfullstack.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.datsystemz.search.springbootreactjsfullstack.exceptions.ResourceNotFoundException;
import com.datsystemz.search.springbootreactjsfullstack.models.Currency;
import com.datsystemz.search.springbootreactjsfullstack.repositories.CurrencyRepository;

@RestController
public class CurrencyController {
	
	private CurrencyRepository currencyRepository;
	
	@Autowired
	public CurrencyController(CurrencyRepository currencyRepository) {
		this.currencyRepository = currencyRepository;
	}
	
	@PostMapping("/currency/save")
    public Currency saveUser(@RequestBody Currency currency){
        return this.currencyRepository.save(currency);
    }
	
	@GetMapping("/currency/{id}")
    public ResponseEntity<Currency> getCurrency(@PathVariable(value = "id" ) String id){
		
		Currency currency = this.currencyRepository.findById(id).orElseThrow(
                ()-> new ResourceNotFoundException("User not found")
        );
		
		return ResponseEntity.ok().body(currency);
		
    }
	@PutMapping("/currency/{id}")
    public Currency updateCurrency(@RequestBody Currency newCurrency, 
    							@PathVariable(value = "symbol") String id){
		
		
		return this.currencyRepository.findById(id).map(
				currency -> {currency.setId(newCurrency.getId());
				return this.currencyRepository.save(currency);
				})
				.orElseGet(()->{
					newCurrency.setId(id);
					return this.currencyRepository.save(newCurrency);
				});
		
     

    }
	
	@GetMapping("/currency/all")
    public ResponseEntity<List<Currency>> getCurrencies(){
        return ResponseEntity.ok(
          this.currencyRepository.findAll()
        );
    }
	@DeleteMapping("user/{id}")
    public ResponseEntity<Void> removeUser(@PathVariable(value = "id") String id){
		Currency currency =this.currencyRepository.findById(id).orElseThrow(
                ()-> new ResourceNotFoundException("Currency not found"+id)
        );

        this.currencyRepository.delete(currency);
        return ResponseEntity.ok().build();
    }


}
