package com.datsystemz.search.springbootreactjsfullstack.repositories;

import com.datsystemz.search.springbootreactjsfullstack.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
