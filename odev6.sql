SELECT AVG(rental_rate) AS ortalama
FROM film;



SELECT COUNT(*) AS sayi
FROM film
WHERE title LIKE 'C%';


SELECT MAX(length) AS en_uzun_film_suresi
FROM film
WHERE rental_rate = 0.99;


SELECT COUNT(DISTINCT replacement_cost) AS farkli_maliyet_sayisi
FROM film
WHERE length > 150;
