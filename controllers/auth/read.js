let read = (req,res,next)=>res.status(200).render('index',{
    title: '/AUTHS',
    subtitle: 'endpoints of auths'
})


export default read