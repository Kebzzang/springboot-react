package com.book.book.domain;

import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

//단위테스트(DB 관련 빈만 IoC에 등록하면 됨)
@AutoConfigureTestDatabase(replace= AutoConfigureTestDatabase.Replace.ANY)
//리플레이스.애니 가짜 디비로 테스트 NONE으로 주면 실제 DB로 테스트
@DataJpaTest
public class BookRepositoryUnitTest {
}
