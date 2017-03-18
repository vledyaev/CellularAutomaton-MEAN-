export class Colors {
    current : number = 0;
    schedule : boolean = false;

        schemes : Scheme[] =[
        {
            dead : '#FFFFFF',
            trail : ['#B5ECA2'],
            alive : ['#9898FF', '#8585FF', '#7272FF', '#5F5FFF', '#4C4CFF', '#3939FF', '#2626FF', '#1313FF', '#0000FF', '#1313FF', '#2626FF', '#3939FF', '#4C4CFF', '#5F5FFF', '#7272FF', '#8585FF']
        },
        {
            dead : '#FFFFFF',
            trail : ['#EE82EE', '#FF0000', '#FF7F00', '#FFFF00', '#008000 ', '#0000FF', '#4B0082'],
            alive : ['#FF0000', '#FF7F00', '#FFFF00', '#008000 ', '#0000FF', '#4B0082', '#EE82EE']
        },

        {
            dead : '#FFFFFF',
            trail : ['#9898FF', '#8585FF', '#7272FF', '#5F5FFF', '#4C4CFF', '#3939FF', '#2626FF', '#1313FF', '#0000FF', '#1313FF', '#2626FF', '#3939FF', '#4C4CFF', '#5F5FFF', '#7272FF', '#8585FF'],
            alive : ['#000000']
        }

    ]

};

class Scheme{

    constructor(public dead: string, public trail: string[], public alive: string[] ){}
}
