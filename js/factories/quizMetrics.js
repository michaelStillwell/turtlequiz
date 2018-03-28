angular.module('app').factory('quizMetrics', function() {
    let quizActive = false;
    return {
        quizActive,
        switchActive: () => {
            quizActive = !quizActive;
            console.log(quizActive);
            return quizActive;
        }
    };
});