
const winnerlist = function(req, res){
    res.render('location',{
        winners:
            [
                {year:'1970', location:'Dublin'},
                {year:'1971', location:'Dublin'},
                {year:'1972', location:'Dublin'},
                {year:'1973', location:'Dublin'},
                {year:'1974', location:'Dublin'},
                {year:'1975', location:'Dublin'},
                {year:'1976', location:'Dublin'},
                {year:'1977', location:'Dublin'},
                {year:'1978', location:'Dublin'},
                {year:'1979', location:'Dublin'},

                {year:'1980', location:'Dún Laoghaire'},
                {year:'1981', location:'Dún Laoghaire'},
                {year:'1982', location:'Galway'},
                {year:'1983', location:'Dublin'},
                {year:'1984', location:'Cork City'},
                {year:'1985', location:'Malahide'},
                {year:'1986', location:'Limerick City'},
                {year:'1987', location:'Galway'},
                {year:'1988', location:'Galway'},
                {year:'1989', location:'Galway'},

                {year:'1990', location:'Cork City'},
                {year:'1991', location:'Limerick City'},
                {year:'1992', location:'Limerick City'},
                {year:'1993', location:'Mosney'},
                {year:'1994', location:'Dublin'},
                {year:'1995', location:'Galway'},
                {year:'1996', location:'Dublin'},
                {year:'1997', location:'Galway'},
                {year:'1998', location:'Ennis'},
                {year:'1999', location:'Ennis'},

                {year:'2000', location:'Belfast'},
                {year:'2001', location:'Cancelled'},
                {year:'2002', location:'Glasgow'},
                {year:'2003', location:'Killarney'},
                {year:'2004', location:'Belfast'},
                {year:'2005', location:'Ennis'},
                {year:'2006', location:'Belfast'},
                {year:'2007', location:'Glasgow'},
                {year:'2008', location:'Belfast'},
                {year:'2009', location:'Philadelphia'},

                {year:'2010', location:'Glasgow'},
                {year:'2011', location:'Dublin'},
                {year:'2012', location:'Belfast'},
                {year:'2013', location:'Boston'},
                {year:'2014', location:'London'},
                {year:'2015', location:'Montreal'},
                {year:'2016', location:'Glasgow'},
                {year:'2017', location:'Dublin'},
                {year:'2018', location:'Glasgow'},
                {year:'2019', location:'Greensboro'},

                {year:'2020', location:'Dublin'},
                {year:'2021', location:'Killarney'},
                {year:'2022', location:'Belfast'},
                {year:'2023', location:'Montreal'},
                {year:'2024', location:'Glasgow'}
            ]});
};
module.exports = {
    winnerlist
};