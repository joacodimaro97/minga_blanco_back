let read = (req,res,next)=>res.status(200).render('index',{
    title: '/AUTHORS',
    subtitle: 'endpoints of authors'
})


export default read