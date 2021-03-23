package com.book.book.service;
//단위 테스트 service와 관련된 애들만 메모리에 띄우면 됨.

import com.book.book.domain.BookRepository;
import com.book.book.domain.BookRepositoryUnitTest;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class BookServiceUnitTest {
    @InjectMocks //BockService 객체가 만들어질 때 해당 파일에 @Mock로 등록된 모든 애들을 여기로 주입시킴
    private BookService bookService;
    @Mock
    private BookRepository bookRepository;
}
