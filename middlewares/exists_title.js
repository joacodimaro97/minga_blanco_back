import Manga from '../models/Manga';

const existsTitleMiddleware = async (req, res, next) => {
  const { title } = req.body;

  try {
    const manga = await Manga.findOne({ title });

    if (manga) {
      return res.status(400).json({ error: 'Manga with this title already exists' });
    }
  } catch (err) {
    return res.status(500).json({ error: 'Server error' });
  }

  next();
};

export default existsTitleMiddleware;