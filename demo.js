let heroHealth = 100
let heroAttack = 20

let monsterHealth = 100
let monsterAttack = 25

if (heroAttack > monsterAttack){
    console.log('hero is stronger than the monster')
} else {
    console.log('hero is weaker than the monster')
}

heroHealth -= monsterAttack

console.log(heroHealth)

while(monsterHealth > 30){
    monsterHealth -= heroAttack
    console.log(`Hero attacks Monster! It deals ${heroAttack} damage! Monster health is now ${monsterHealth}`)

    if (monsterHealth <= 30){
        console.log('Monster is no longer a threat! It retreats to repair itself.')
    }
}

for(let i = 0; i < 2; i++){
    if (monsterHealth + 50 > 100){
        monsterHealth = 100
    } else {
        monsterHealth += 30
    }
}

console.log(monsterHealth)

let monsterDefense = 15

let attacks = 0

while(monsterHealth > 30){
    monsterHealth -= heroAttack - monsterDefense
    console.log(`Hero attacks monster. Monster health is now ${monsterHealth} after taking ${heroAttack - monsterDefense}`)
    attacks++
}
