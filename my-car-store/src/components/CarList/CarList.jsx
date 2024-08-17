import React from 'react';
import styles from './CarList.module.css';
import hondaAccord from '../../images/honda_accord.jpeg';
import hondaCivic from '../../images/honda_civic.jpg';
import hondaClarity from '../../images/honda_clarity.jpeg';
import hondaCrv from '../../images/honda_cr_v.jpeg';
import hondaCrz from '../../images/honda_cr_z.jpeg';
import hondaFit from '../../images/honda_fit.jpeg';
import hondaHrv from '../../images/honda_hr_v.jpeg';
import hondaInsight from '../../images/honda_insight.jpeg';
import hondaOdyssey from '../../images/honda_odyssey.jpeg';
import hondaPassport from '../../images/honda_passport.jpeg';
import hondaPilot from '../../images/honda_pilot.jpeg';
import hondaRidgeline from '../../images/honda_ridgeline.jpeg';

function CarList() {
  const cars = [
    { id: 1, name: 'Honda Accord', price: 26120, image: hondaAccord, feature: 'Spacious and comfortable sedan' },
    { id: 2, name: 'Honda Civic', price: 22350, image: hondaCivic, feature: 'Fuel-efficient compact car' },
    { id: 3, name: 'Honda Clarity', price: 33400, image: hondaClarity, feature: 'Eco-friendly hybrid option' },
    { id: 4, name: 'Honda CR-V', price: 26400, image: hondaCrv, feature: 'Versatile compact SUV' },
    { id: 5, name: 'Honda CR-Z', price: 20920, image: hondaCrz, feature: 'Sporty hybrid coupe' },
    { id: 6, name: 'Honda Fit', price: 17120, image: hondaFit, feature: 'Compact and highly practical' },
    { id: 7, name: 'Honda HR-V', price: 21870, image: hondaHrv, feature: 'Subcompact crossover SUV' },
    { id: 8, name: 'Honda Insight', price: 25210, image: hondaInsight, feature: 'Efficient hybrid sedan' },
    { id: 9, name: 'Honda Odyssey', price: 32290, image: hondaOdyssey, feature: 'Family-friendly minivan' },
    { id: 10, name: 'Honda Passport', price: 32790, image: hondaPassport, feature: 'Rugged midsize SUV' },
    { id: 11, name: 'Honda Pilot', price: 32550, image: hondaPilot, feature: 'Spacious three-row SUV' },
    { id: 12, name: 'Honda Ridgeline', price: 36490, image: hondaRidgeline, feature: 'Versatile pickup truck' },
  ];

  return (
    <div className={styles.carList}>
      <h1>Our Honda Models</h1>
      <div className={styles.carGrid}>
        {cars.map(car => (
          <div key={car.id} className={styles.carCard}>
            <div className={styles.imageContainer}>
              <img src={car.image} alt={car.name} />
            </div>
            <h3>{car.name}</h3>
            <p className={styles.price}>${car.price.toLocaleString()}</p>
            <p className={styles.feature}>{car.feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarList;