package com.project.application.InstagramBackend.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        // allow frontend pages
                        .requestMatchers(
                                "/",
                                "/index.html",
                                "/signup.html",
                                "/feed.html",
                                "/css/**",
                                "/js/**"
                        ).permitAll()

                        // allow auth APIs
                        .requestMatchers("/api/auth/**").permitAll()

                        // secure everything else
                        .anyRequest().authenticated()
                )
                .sessionManagement(sess ->
                        sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                );


        return http.build();
    }

}
