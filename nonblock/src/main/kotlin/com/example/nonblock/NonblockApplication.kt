package com.example.nonblock

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class NonblockApplication

fun main(args: Array<String>) {
    runApplication<NonblockApplication>(*args)
}
