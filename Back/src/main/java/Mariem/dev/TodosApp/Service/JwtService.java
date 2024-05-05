package Mariem.dev.TodosApp.Service;

import Mariem.dev.TodosApp.Entity.AuthDTO;
import Mariem.dev.TodosApp.Entity.Response;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.security.SecureRandom;
import java.util.Base64;
import java.util.Date;
@Service
public class JwtService {

    private static String secretKey;

    public JwtService() {
        secretKey = generateKey();
    }

    public String generateKey() {
        SecureRandom secureRandom = new SecureRandom();
        byte[] key = new byte[32];
        secureRandom.nextBytes(key);
        return Base64.getEncoder().encodeToString(key);
    }

    public String createToken(String userId) {
        byte[] secretBytes = secretKey.getBytes(StandardCharsets.UTF_8);
        SecretKey key = Keys.hmacShaKeyFor(secretBytes);

        String token = Jwts.builder()
                .setSubject(userId)
                .claim("id", userId)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 600000)) // Set token to expire in 10 minutes
                .signWith(key)
                .compact();
        return token;
    }

    public Response validateToken(AuthDTO auth) {
        byte[] secretBytes = secretKey.getBytes(StandardCharsets.UTF_8);
        SecretKey key = Keys.hmacShaKeyFor(secretBytes);

        try {
            String tokenUserId = Jwts.parser().verifyWith(key).build().parseSignedClaims(auth.getToken()).getBody().getSubject();

            if (auth.getUserId().toString().equals(tokenUserId)) {
                return new Response("User Authorized", true, auth.getUserId(), auth.getToken());
            } else {
                return new Response("User Unauthorized", false, auth.getUserId(), null);
            }
        } catch (Exception e) {
            return new Response("User Unauthorized", false, auth.getUserId(), null);
        }
    }
}