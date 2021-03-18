package com.book.book.domain;

import org.springframework.data.jpa.repository.JpaRepository;

//@Repository 해야 스프링 IoC 빈으로 등록이 되는데??
//JpaRepository를 익스텐즈하면 안해도 됨
public interface BookRepository extends JpaRepository<Book, Long> {
}
