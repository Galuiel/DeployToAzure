const winnerlist = function(req, res){
    res.render('winners2018',{
        winners:
            [
                {group:'Girls 10-11', name:'Caitlin Murray', school: 'McConomy\-Bradley\-Doherty', region: 'Ulster'},
                {group:'Boys 10-11', name:'Shay Brunning', school: 'Inis Cara', region: 'Midlands, England\/Wales'},
                {group:'Girls 11-12', name:'Carmen McAleer', school: 'Scoil Rince Clann McCaul', region: 'Ulster'},
                {group:'Boys 11-12', name:'Ashton Baumann', school: 'Lavin\-Cassidy', region: 'Mid America USA'},
                {group:'Girls 12-13', name:'Blanaid O\'Neill', school: 'Doherty Petri', region: 'USA, UK, Ireland'},
                {group:'Boys 12-13', name:'Jared Marshall', school: 'Marchall', region: 'North East England'},
                {group:'Girls 13-14', name:'Caoimhe Devlin', school: 'McConomy\-Bradley\-Doherty', region: 'Ulster'},
                {group:'Boys 13-14', name:'Lochlan Howard', school: 'The Academy', region: 'Mid America USA'},
                {group:'Girls 14-15', name:'Alliyah O\'Hare', school: 'Scanlon', region: 'Midlands, England\/Wales'},
                {group:'Boys 14-15', name:'Joseph Howarth', school: 'Glendarragh', region: 'North West England'},
                {group:'Girls 15-16', name:'Aiesha Coyle', school: 'Doherty Petri', region: 'USA, UK, Ireland'},
                {group:'Boys 15-16', name:'Liam Costello', school: 'McGahan Lees Creer', region: 'New South Wales, Australia'},
                {group:'Girls 16-17', name:'Órlaith Bradley', school: 'Scoil Rince De Barra', region: 'Ulster'},
                {group:'Boys 16-17', name:'Ciaran Coyle', school: 'Scanlon', region: 'Midlands, England\/Wales'},

                {group:'Ladies 17-18', name:'Orla Mullane Godley', school: 'Mullane Godley', region: 'Mid America USA'},
                {group:'Men 17-18', name:'Joe McGeown', school: 'Aaron Crosbie \& Co', region: 'Southern England'},
                {group:'Ladies 18-19', name:'Roisin Naughton', school: 'Coleman', region: 'Connacht'},
                {group:'Men 18-19', name:'Matthew Gardiner', school: 'Hession', region: 'Connacht'},
                {group:'Ladies 19-20', name:'Melanie Valdes', school: 'Doherty Petri', region: 'USA, UK, Ireland'},
                {group:'Men 19-20', name:'Jonty Moore', school: 'Fiona\-Gaye Moore', region: 'New South Wales, Australia'},
                {group:'Ladies 20-21', name:'Shannon Bradley', school: 'Doherty Petri', region: 'USA, UK, Ireland'},
                {group:'Men 20-21', name:'Nathan Dale', school: 'Gary Healy', region: 'Western USA'},
                {group:'Ladies 21-23', name:'Mackenzie Mahler', school: 'Blakey \'Brien', region: 'Western Canada'},
                {group:'Senior Men over 21', name:'Ian Luebbers', school: 'Holly \& Kavanagh', region: 'Leinster'},
                {group:'Senior Ladies over 23', name:'Jessica Hindley', school: 'Carey', region: 'Midlands, England/Wales'}
            ]});
};

module.exports = {
    winnerlist
};