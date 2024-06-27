import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper, Container } from '@mui/material';

const blogs = [
  {
    id: 1,
    title: "Exploring the Future of AI",
    excerpt: "Artificial intelligence (AI) continues to evolve rapidly...",
    date: "2024-06-01",
    category: "Technology",
    content: "Artificial intelligence (AI) continues to evolve rapidly, transforming various sectors from healthcare to finance, and beyond. As we look to the future, AI is poised to become even more integrated into our daily lives, offering new possibilities for innovation and efficiency. The advancements in machine learning, natural language processing, and autonomous systems are just the beginning. We are on the brink of witnessing AI-driven technologies that can perform complex tasks with human-like understanding and adaptability. This includes everything from personalized education platforms to smart cities that can manage resources and reduce waste autonomously. However, with these advancements come challenges and ethical considerations. Ensuring that AI is developed and deployed responsibly, with transparency and fairness, is crucial to harnessing its full potential while mitigating risks. As researchers and policymakers work together to navigate these complexities, the future of AI promises to be an exciting and transformative journey.",
    author: "Soorya",
    image: "https://imgs.search.brave.com/ngHMxwcNYXEG4H1ZJfcJkb7vAJqdvGYt9KDb8LwJITs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzY2Lzk2LzYw/LzM2MF9GXzE2Njk2/NjA1Ml9nanhTVXdL/TEIwRG9Pd2NPYVRG/T05ISGxmMmVkak14/Ry5qcGc"
  },
  {
    id: 2,
    title: 'Top Travel Destinations in 2024',
    excerpt: 'Discover the best places to travel in the upcoming year...',
    date: '2024-06-02',
    category: 'Travel',
    content: `As we look ahead to 2024, the world of travel is brimming with exciting destinations waiting to be explored. Whether you're an adventure seeker, a history enthusiast, or someone looking to unwind in serene landscapes, this year's top travel destinations offer something for everyone. Here are some of the must-visit locations in 2024:

1. **Kyoto, Japan**: Immerse yourself in the rich culture and history of Kyoto. Known for its stunning temples, traditional tea houses, and vibrant geisha districts, Kyoto offers a blend of ancient traditions and modern elegance. The cherry blossom season, in particular, is a breathtaking experience not to be missed.

2. **Lisbon, Portugal**: Lisbon has become one of Europe's trendiest destinations, with its charming neighborhoods, historic trams, and thriving culinary scene. Wander through the narrow streets of Alfama, enjoy a ride on Tram 28, and indulge in delicious pastéis de nata while overlooking the Tagus River.

3. **Bali, Indonesia**: Discover the allure of Bali's pristine beaches, lush rice terraces, and spiritual culture. Whether you're surfing in Kuta, exploring Ubud's art scene, or hiking Mount Batur for sunrise, Bali promises an unforgettable escape into paradise.

4. **Patagonia, Chile & Argentina**: For nature enthusiasts, Patagonia offers unparalleled beauty with its rugged landscapes, glaciers, and diverse wildlife. Explore Torres del Paine National Park, marvel at the Perito Moreno Glacier, and embark on scenic hikes amidst breathtaking vistas.

5. **Dubrovnik, Croatia**: Known as the "Pearl of the Adriatic," Dubrovnik captivates visitors with its medieval walls, baroque architecture, and stunning seaside views. Walk along the city walls, visit historical sites like Rector's Palace and St. Blaise Church, and relax on the picturesque beaches along the Dalmatian coast.

Whether you're seeking cultural immersion, outdoor adventures, or simply relaxation, these destinations offer a perfect blend of experiences to make 2024 a memorable year for travel.`,
    author: 'Jane Smith',
    image: 'https://imgs.search.brave.com/So-E7bVLv6nRWG3399KXNUoakQgt971d2Fwo0koDulk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODk1/MDgxODI0L3Bob3Rv/L3RvdXJpc3Qtdmlz/aXRpbmctc3BhaW4u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVZGbHV3ck1yTURZ/b3gxVzg4ZV92Tjl5/TnA2N2lVTmEtVnVi/OTZoZGg4Tjg9',
  },
  {
    id: 3,
    title: 'Delicious Recipes to Try This Week',
    excerpt: 'Explore new and exciting recipes for your next meal...',
    date: '2024-06-03',
    category: 'Food',
    content: `Indulge in culinary delights with these delicious recipes to try this week. Whether you're a novice in the kitchen or a seasoned chef, these recipes promise to tantalize your taste buds and inspire your next meal planning session. 
    1. Pasta Primavera: A vibrant dish bursting with seasonal vegetables and a creamy Parmesan sauce. Perfect for a quick and satisfying dinner.
    2. Grilled Salmon with Citrus Salsa: Fresh salmon fillets marinated in zesty citrus flavors and grilled to perfection. Serve with a side of quinoa or wild rice for a wholesome meal.
    3. Mango Avocado Salad: A refreshing blend of ripe mangoes, creamy avocados, and tangy lime dressing. This salad is a delightful balance of sweet and savory.
    4. Homemade Pizza Margherita: Classic Italian pizza topped with fresh mozzarella, juicy tomatoes, and fragrant basil leaves. Bake until the crust is golden and crisp for an authentic taste.
    5. Chocolate Chip Banana Bread: Moist and decadent banana bread studded with gooey chocolate chips. Enjoy a slice with your morning coffee or as an afternoon treat.`,
    author: 'Alice Johnson',
    image: 'https://imgs.search.brave.com/-ssG6XoggPo3p7inyG9JZwNyBPfZ9To2ev7mLErUSQg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/ZmxhdGxheS1pcm9u/LXNraWxsZXQtd2l0/aC1tZWF0LWFuZC1v/dGhlci1mb29kLmpw/Zz93aWR0aD0xMDAw/JmZvcm1hdD1wanBn/JmV4aWY9MCZpcHRj/PTA',
  },
  {
    id: 4,
    title: 'Lifestyle Tips for a Balanced Life',
    excerpt: 'Learn how to achieve balance in your daily lifestyle...',
    date: '2024-06-04',
    category: 'Lifestyle',
    content: `Achieving a balanced lifestyle is essential for overall well-being. Discover practical tips and strategies to integrate into your daily routine to foster physical health, mental clarity, and emotional stability. From mindfulness practices to effective time management, find the tools to live a harmonious life.
  - Practice Mindfulness: Start your day with a few minutes of meditation or deep breathing exercises to center your mind and reduce stress.
  - Maintain a Healthy Diet: Fuel your body with nutritious meals rich in fruits, vegetables, lean proteins, and whole grains.
  - Stay Active: Incorporate regular exercise into your routine, whether it's yoga, jogging, or dancing. Physical activity boosts energy levels and promotes overall fitness.
  - Prioritize Sleep: Aim for 7-9 hours of quality sleep each night to support cognitive function and mood regulation.
  - Set Boundaries: Learn to say no to commitments that overwhelm you and prioritize activities that bring you joy and fulfillment.`,
    author: 'Bob Brown',
    image: 'https://imgs.search.brave.com/63AsR9AI1bli0e3ON7o8ITSvfSq0CMWbLAxTYQfnt0k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjYw/NjU0NDY2L3Bob3Rv/L2xpZmUtYmFsYW5j/ZS1jaG9pY2VzLXNp/Z25wb3N0LXdpdGgt/c3VucmlzZS1za3kt/YmFja2dyb3VuZHMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0y/MCZj/PXlEU1k3OEhuMGt5/QzFkSzkzTHhoSUJt/dkpDXzk1Mm5ObWpJ/WElybVduWHM9',
  },
  {
    id: 5,
    
  title: 'Advancements in Renewable Energy',
  excerpt: 'The latest breakthroughs in solar and wind power...',
  date: '2024-06-05',
  category: 'Technology',
  content: `Explore the cutting-edge innovations driving the renewable energy sector forward. From advancements in solar panel efficiency to breakthroughs in wind turbine technology, discover how renewable energy is reshaping the future of sustainable power generation.
- High-Efficiency Solar Cells: New materials and manufacturing techniques are enhancing solar panel efficiency, making solar energy more accessible and cost-effective.
- Wind Turbine Design: Innovations in turbine blade design and placement are optimizing wind farm performance and harnessing more energy from wind currents.
- Energy Storage Solutions: Developments in battery technology are enabling better storage of renewable energy, reducing reliance on fossil fuels during peak demand.
- Grid Integration: Smart grid technologies are improving the integration of renewable energy sources into existing power grids, enhancing stability and reliability.
- Policy and Investment: Governments and private sectors are increasing investments in renewable energy projects and implementing supportive policies to accelerate the transition to clean energy.`,
  author: 'Charlie Green',
  image: 'https://imgs.search.brave.com/_O0okbguZyxcurnz_aiiV8ZCc2oAC0UsTyxXXXkeGbs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTAz/MjY4MzYxMi9waG90/by9zb2xhci1lbmVy/Z3ktYW5kLXdpbmQt/cG93ZXItc3RhdGlv/bnMuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUtYRWxEVHhy/UnJYRzcyc1ZENFFH/bmN0SlUxaVNNcm9L/UE9sNlhVZkdITms9',
  },
  {
    id: 6,
    title: 'A Culinary Journey Through Italy',
    excerpt: 'Experience the rich flavors of Italian cuisine...',
    date: '2024-06-06',
    category: 'Travel',
    content: `Embark on a gastronomic adventure through Italy's diverse culinary landscape. From the aromatic flavors of Tuscany to the seafood delights of the Amalfi Coast, savor the essence of Italian cuisine and discover the cultural significance behind each dish.
    - Pizza Napoletana: Discover the origins of Neapolitan pizza with its chewy crust, San Marzano tomatoes, fresh mozzarella, and basil leaves.
    - Pasta Carbonara: Indulge in creamy pasta tossed with pancetta, eggs, Parmesan cheese, and black pepper—a traditional Roman dish beloved for its simplicity and richness.
    - Gelato: Treat yourself to Italy's famous gelato, crafted with fresh ingredients and offering a velvety texture in flavors like pistachio, stracciatella, and lemon.
    - Seafood Risotto: Enjoy creamy risotto infused with seafood flavors, such as shrimp, clams, and mussels, popular along the coastal regions of Italy.
    - Tiramisu: Conclude your meal with tiramisu, a decadent dessert of coffee-soaked ladyfingers layered with mascarpone cheese and dusted with cocoa powder.`,
    author: 'David Lee',
    image: 'https://imgs.search.brave.com/qJKD9QX-QTQ8-P3H7z36U-KzstLLR-J5v-gBaale1S4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5saWNkbi5jb20v/ZG1zL2ltYWdlL0Q0/RDEyQVFGSkt3MVdv/NXZUTHcvYXJ0aWNs/ZS1jb3Zlcl9pbWFn/ZS1zaHJpbmtfNzIw/XzEyODAvMC8xNjk0/NDM4OTIzNDc3P2U9/MjE0NzQ4MzY0NyZ2/PWJldGEmdD1Bamp4/YmNKQXRtWml4S3o5/ZW1aWlZPaEtKODZq/WEtQbEt0SDdia2Z3/Z3Yw.jpeg',
  },
  {
    id: 7,
    title: 'Healthy and Quick Breakfast Ideas',
    excerpt: 'Start your day right with these nutritious breakfasts...',
    date: '2024-06-07',
    category: 'Food',
    content: `Kickstart your mornings with nutritious and easy-to-prepare breakfast ideas. Whether you prefer hearty oats, energizing smoothies, or protein-packed egg dishes, these recipes are designed to fuel your day and promote a healthy lifestyle.
- Overnight Oats: Prepare a batch of overnight oats with rolled oats, chia seeds, almond milk, and your favorite toppings like fresh berries and nuts.
- Green Smoothie: Blend spinach, kale, banana, Greek yogurt, and a splash of coconut water for a refreshing and nutrient-packed smoothie.
- Avocado Toast: Top whole-grain toast with mashed avocado, a sprinkle of sea salt, and a drizzle of olive oil for a satisfying and heart-healthy breakfast.
- Vegetable Omelette: Whisk together eggs and sautéed vegetables such as bell peppers, spinach, and mushrooms for a protein-rich omelette that keeps you full until lunch.
- Greek Yogurt Parfait: Layer Greek yogurt with granola, honey, and mixed berries for a delicious parfait that combines protein, fiber, and antioxidants.`,
    author: 'Eva White',
    image: 'https://imgs.search.brave.com/-yUaohXeSdNbCI5vKkBnFZCh173ady3wko0j_ciiy30/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9ncmVl/a3lvZ3VydHdhZmZs/ZXMtMTU0NjYzNjU4/Ny5qcGc_Y3JvcD0x/eHc6MC45OTk0OTg5/OTc5OTU5OTJ4aDtj/ZW50ZXIsdG9wJnJl/c2l6ZT05ODA6Kg',
  },
];

const BlogDetailsPage = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return (
      <Container maxWidth="md">
        <Typography variant="h5" component="p">
          Blog not found
        </Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ backgroundColor: '#77B0AA', minHeight: '100vh', paddingTop: '20px' }}>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ padding: 3, marginTop: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            {blog.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            By {blog.author} on {new Date(blog.date).toLocaleDateString()}
          </Typography>
          <img
            src={blog.image}
            alt={blog.title}
            style={{ width: '100%', borderRadius: '8px', marginBottom: '20px', maxHeight: '370px', objectFit: 'cover' }}
          />
          <Typography variant="body1" component="p" paragraph>
            {blog.content}
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default BlogDetailsPage;
