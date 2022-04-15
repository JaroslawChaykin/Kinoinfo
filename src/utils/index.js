import classes from '../components/MovieRating/MovieRating.module.scss';

export const ratingAge = (ageStr) => ageStr?.slice(3, 5)

export const dynamicColorRating = (rating) => {
    if(rating < '5') {
        return classes.rating + ' ' + classes.badRating
    }
    if(rating < '7') {
        return classes.rating + ' ' + classes.normalRating
    }
    if(rating > '7') {
        return classes.rating + ' ' + classes.goodRating
    }
    return classes.rating
}