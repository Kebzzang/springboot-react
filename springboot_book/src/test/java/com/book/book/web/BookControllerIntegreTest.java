package com.book.book.web;

//통합 테스트 : 컨트롤러로 전체 스프링 프로젝트를 테스트해보겠다.
//모든 빈들을 똑같이 IoC에 올리고 테스트 하는 것
/*
MOCK는 다른 톰캣으로 테스트
RANDOM_PORT 실제 톰캣으로 테스트
@AutoConfigureMockMvc MockMvc를 IoC에 등록
@Transactional은 각각 테스트 함수 종료될 때마다 트랜잭션을 롤백해줌

 */
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@AutoConfigureMockMvc
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.MOCK) //전체 테스트!! 다 메모리에 뜬다
public class BookControllerIntegreTest {
    @Autowired
    private MockMvc mockMvc;

    public void test1(){

    }
    public void test2(){}
}
