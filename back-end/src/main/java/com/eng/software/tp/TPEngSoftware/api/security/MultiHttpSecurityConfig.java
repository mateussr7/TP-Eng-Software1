package com.eng.software.tp.TPEngSoftware.api.security;

import com.google.common.collect.ImmutableList;
import io.swagger.models.HttpMethod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@EnableWebSecurity
public class MultiHttpSecurityConfig {

    @Configuration
    public class SecurityConfig extends WebSecurityConfigurerAdapter {


        @Override
        protected void configure(HttpSecurity http) throws Exception {
            AuthenticationManager authManager = authenticationManager();

            http
                    .cors().and()
//					.antMatcher("/api/**/**")
                    .authorizeRequests()
                    .antMatchers(String.valueOf(HttpMethod.POST), "/api/user/login").permitAll()
                    .antMatchers(String.valueOf(HttpMethod.POST), "/api/product/list").permitAll()
                    .antMatchers(String.valueOf(HttpMethod.POST), "/api/product/insert").permitAll()
                    .antMatchers(String.valueOf(HttpMethod.POST), "/api/product/delete").permitAll()
                    .antMatchers(String.valueOf(HttpMethod.POST), "/api/product/update").permitAll()
                    .antMatchers(String.valueOf(HttpMethod.POST), "/api/employee/list").permitAll()
                    .antMatchers(String.valueOf(HttpMethod.POST), "/api/employee/insert").permitAll()
                    .antMatchers(String.valueOf(HttpMethod.POST), "/api/employee/delete").permitAll()
                    .antMatchers(String.valueOf(HttpMethod.POST), "/api/employee/update").permitAll()
                    .antMatchers(String.valueOf(HttpMethod.POST), "/api/user/list").permitAll()
                    .antMatchers(String.valueOf(HttpMethod.POST), "/api/user/insert").permitAll()
                    .antMatchers(String.valueOf(HttpMethod.POST), "/api/user/delete").permitAll()
                    .antMatchers(String.valueOf(HttpMethod.POST), "/api/user/update").permitAll()
                    .antMatchers(String.valueOf(HttpMethod.POST), "/api/sale/list").permitAll()
                    .antMatchers(String.valueOf(HttpMethod.POST), "/api/sale/insert").permitAll()
                    .antMatchers(String.valueOf(HttpMethod.POST), "/api/sale/delete").permitAll()
                    .antMatchers(String.valueOf(HttpMethod.POST), "/api/sale/update").permitAll()
                    .anyRequest().authenticated()
                    .and().csrf().disable()
                    .exceptionHandling()
                    .and()
                    .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        }

        @Override
        public void configure(WebSecurity web) throws Exception {
            super.configure(web);
            web.ignoring().antMatchers("/**.html","/v2/api-docs", "/configuration/**",
                    "/api/**/swagger*/**", "/webjars/**",
                    "/swagger-resources/**");
        }

    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        final CorsConfiguration configuration = new CorsConfiguration();

        configuration.setAllowedOrigins(ImmutableList.of("*"));
        configuration.setAllowedMethods(ImmutableList.of("HEAD", "GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"));
        configuration.setAllowCredentials(true);
        configuration.setAllowedHeaders(ImmutableList.of("Authorization", "Cache-Control", "Content-Type", "Access-Control-Allow-Origin"));

        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }



}
