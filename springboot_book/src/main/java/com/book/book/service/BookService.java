package com.book.book.service;

import com.book.book.domain.Book;
import com.book.book.domain.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


//기능을 정의할 수 있고, 트랜잭션을 관리할 수 있음.
//
@RequiredArgsConstructor //파이널이 붙어있는 애들 찾아서 DI 해줌!! 오토 와이얼드 안하고!!
@Service
public class BookService {
    //함수=> 송금() => 레파지토리에 여러개의 함수를 실행 => commit or rollback


    private final BookRepository bookRepository;
    @Transactional //서비스 함수가 종료될 때 커밋할지 롤백할지 트랜잭션 관리하겠다 선언
    public Book saveBook(Book book){
        return bookRepository.save(book);
    }
    @Transactional(readOnly = true) //좋은 점 : 1. JPA에서 변경 감지 내부 기능 활성화 x , 2. update 시 정합성을 유지시켜줌. insert의 유령데이터현상(팬텀현상) 못막음
    public Book  searchBook(Long id){
        return bookRepository.findById(id).orElseThrow(()->new IllegalArgumentException("Id를 확인해주세요!"));

    }

    public List<Book> bookList(){
        return bookRepository.findAll();
    }
    @Transactional
    public Book updateBook(Long id, Book book){
    //더티체킹 update 치기
        Book bookEntity=bookRepository.findById(id).orElseThrow(()->new IllegalArgumentException("Id를 확인해주세요!")); //데이터 영속화  -> 영속성 컨텍스트 안에 저장됨
        bookEntity.setTitle(book.getTitle());
        bookEntity.setAuthor(book.getAuthor());


        return bookEntity;
    } //함수 종료 -> 트랜잭션 종료 -> 영속화되어있는 데이터를 디비로 갱신 (flush) 디비에 실제 commit!! 변화감지해 등록까지~
    public String deleteBook(Long id){
         bookRepository.deleteById(id); //문제 생기면 error exception을 타서 오케이 리턴까지 못감!
         return "ok";
    }

}
