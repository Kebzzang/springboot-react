package com.book.book.web;

import com.book.book.domain.Book;
import com.book.book.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor //생성자를 만들고 , DI??

@RestController
public class BookController {


    private final BookService bookService;

    @PostMapping("/book")
    public ResponseEntity<?> save(@RequestBody Book book){
        return new ResponseEntity<>(bookService.saveBook(book), HttpStatus.CREATED);
    }

    @GetMapping("/book")
    public ResponseEntity<?> findAll(){ //httpstatuscode를 같이 보낼 수 있는 엔티티
        return new ResponseEntity<>(bookService.bookList(), HttpStatus.OK);
    }
    @GetMapping("/book/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id){
        return new ResponseEntity<>(bookService.searchBook(id), HttpStatus.OK);
    }
    @PutMapping("/book/{id}")
    public ResponseEntity<?> updateById(@PathVariable Long id, @RequestBody Book book){
        return new ResponseEntity<>(bookService.updateBook(id, book), HttpStatus.OK);
    }
    @DeleteMapping("/book/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id, @RequestBody Book book){
        return new ResponseEntity<>(bookService.deleteBook(id), HttpStatus.OK);
    }

}
