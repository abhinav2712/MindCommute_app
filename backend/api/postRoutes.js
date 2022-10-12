import express from 'express';
const api = express.Router();

api.route('/')
.get((req, res)=>{
    res.json('GET Page')
})
.post((req, res)=>{
    res.json('POST Page')
})

api.route('/:id')
.put()
.delete()
.get((req, res)=>{
    res.json(req.params.id)
});

export default api;