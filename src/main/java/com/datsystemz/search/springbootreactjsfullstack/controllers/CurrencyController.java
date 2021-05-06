package com.datsystemz.search.springbootreactjsfullstack.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
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
	
	@PostMapping("/save")
    public Currency saveCurrency(@RequestBody Currency currency){
		System.out.println("New currency created: " + currency.getId());
        return this.currencyRepository.save(currency);
    }
	
	@GetMapping(value="/{id}")
	@ResponseBody
    public Optional<Currency> getCurrency(@PathVariable(value = "id" ) String id){
		
		System.out.println("GetCurrency: " + id);

		return this.currencyRepository.findById(id);
		
    }
	
	@GetMapping("/all")
    public ResponseEntity<Iterable<Currency>> getCurrencies(){
        return ResponseEntity.ok(
          this.currencyRepository.findAll()
        );
    }
	@DeleteMapping("/{id}")
    public ResponseEntity<Void> removeCurrency(@PathVariable(value = "id") String id){
		Currency currency =this.currencyRepository.findById(id).orElseThrow(
                ()-> new ResourceNotFoundException("Currency not found"+id)
        );

        this.currencyRepository.delete(currency);
        return ResponseEntity.ok().build();
    }


}
