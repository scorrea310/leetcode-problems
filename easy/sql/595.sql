-- https://leetcode.com/problems/big-countries/description/
-- SELECT name, population, area FROM World WHERE area >= 3000000 OR population >= 25000000;
SELECT
    name, population, area
FROM
    world
WHERE
    area >= 3000000 OR population >= 25000000
;