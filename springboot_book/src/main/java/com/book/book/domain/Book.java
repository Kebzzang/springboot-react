package com.book.book.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
//서버 실행시 Object Relation Mapping 이 됨 (ORM) - 테이블이 h2에 생성됨
public class Book {
    @Id //PK는 해당 변수인 id이다.
    @GeneratedValue(strategy = GenerationType.IDENTITY) //해당 데이터베이스 번호 증가 전략을 따르곘다.
    private Long id;

    private String title;
    private String author;


}
