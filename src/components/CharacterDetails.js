/* eslint-disable default-case */
import {Link} from 'react-router-dom';
import defaultImg from '../images/harry-placeholder.png';
import PropTypes, { object } from 'prop-types';
import '../styles/components/Details.scss';

function CharacterDetails (props) {
    
    //Variables para obtener la className
   let house = '';
    if (props.character.house === 'Gryffindor') {
        house = '--gry';
       } else if (props.character.house === 'Slytherin') {
        house = '--sly';
       } else if (props.character.house === 'Ravenclaw') {
        house = '--raven';
       } else if (props.character.house === 'Hufflepuff') {
        house = '--huff';
       }
      
    
    const isAlive = () => {
        if (props.character.alive && props.character.gender === 'female') {
            return ('Viva ♥')
        } else if (props.character.alive && props.character.gender === 'male') {
            return 'Vivo ♥';
        } else if (props.character.alive === false && props.character.gender === 'male') {
            return 'Muerto ☠';
        } else if (props.character.alive === false && props.character.gender === 'female') {
            return 'Muerta ☠';
    }
}
    const getGender = () => {
        return props.character.gender === 'female'? 'Femenino': 'Masculino'
    }

    const getSpecies = () => {
        switch (props.character.species) {
            case 'human':
            return 'Humano/a';
            case 'werewolf':
            return 'Licántropo';
            case 'half-giant':
            return 'Medio gigante';
            case 'ghost':
            return 'Espectro';
            case 'cat':
            return 'Gato';
            case 'goblin':
            return 'Duende';
            case 'owl':
            return 'Búho';
            case 'poltergeist':
            return 'Poltergeist';
            case 'three-headed dog':
            return 'Perro de tres cabezas';
            case 'dragon':
            return 'Dragón';
            case 'centaur':
            return 'Centauro';
            case 'house-elf':
            return 'Elfo doméstico';
            case 'hippogriff':
            return 'Hipogrifo';
            case 'acromantula':
            return 'Acromántula';
            case 'giant':
            return 'Gigante';
            case 'vampire':
            return 'Vampiro';
            case 'half-human':
            return 'Medio humano';
        }
    }
    
    return(
        <>
        <div className='details'>
            <ul className='details__list'>
                <li className='details__item'>
                        <img className='details__photo' alt={`Foto de ${props.character.name}`} title={props.character.name} src={props.character.image || defaultImg} />
                    <h3 className='details__name'>{props.character.name}</h3>
                    <h4 className='details__altname'>{props.character.altName || null}</h4>
                    <div className='details__wrapper'>
                        <div className='details__data'>
                    <p>Estado: {isAlive()}</p>
                    <p>Especie: {getSpecies()}</p>
                    <p>Género: {getGender()}</p>
                    <p>Casa: {props.character.house || 'N/A'}</p>
                    </div>
                        <div className={`details__crest${house}`}></div>
                    </div>
                </li>
            </ul>
        </div>
    <Link to='/'><i className="details__back fa-solid fa-hand-point-left"></i></Link>
    </>
    )
};

CharacterDetails.propTypes = {
    character: object,
}

export default CharacterDetails;