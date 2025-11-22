const baseHead = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>How-To Landing Page</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
`;

const styleBlock = `  <style>
    body { font-family: Arial, sans-serif; line-height: 1.5; }
    section { padding: 3rem 0; }
    #hero { background: #f7f7ff; }
    #steps { background: #ffffff; }
    #contact { background: #f9f9f9; }
    #contact_form {
      max-width: 580px; margin: 0 auto; padding: 20px;
      background: #ffffff; border-radius: 4px;
      box-shadow: 0 0 3px rgba(0,0,0,0.15);
    }
    #contact_form label { display: block; margin-bottom: 0.75rem; font-weight: bold; }
    #contact_form input[type="text"],
    #contact_form input[type="email"],
    #contact_form input[type="tel"] {
      width: 100%; padding: 8px; margin-top: 0.25rem; margin-bottom: 0.5rem;
      border-radius: 3px; border: 1px solid #ccc; box-sizing: border-box;
    }
    .sendButton {
      display: inline-block; padding: 10px 20px; border-radius: 3px;
      border: none; cursor: pointer; background: #f6b34b; color: #fff; font-weight: bold;
    }
    .sendButton:hover { background: #fb9e25; }
    footer { text-align: center; padding: 1rem 0; color: #777; font-size: 0.9rem; }
  </style>
`;

const heroSection = `  <section id="hero">
    <div class="container">
      <div class="text-center mb-4">
        <h1>Your Skill Title Goes Here</h1>
        <p>One short sentence explaining the value of your skill.</p>
      </div>
`;

const carouselSection = `      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="https://placeimg.com/1080/450/tech" alt="First slide">
            <div class="carousel-caption d-none d-md-block">
              <h5>Before</h5>
              <p>Describe your first phase, starting point, or setup.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://placeimg.com/1080/450/people" alt="Second slide">
            <div class="carousel-caption d-none d-md-block">
              <h5>During</h5>
              <p>Show a mid-process moment of your skill.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://placeimg.com/1080/450/nature" alt="Third slide">
            <div class="carousel-caption d-none d-md-block">
              <h5>After</h5>
              <p>Show the completed skill or finished result.</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </section>
`;

const stepsSection = `  <section id="steps">
    <div class="container">
      <h2 class="text-center mb-4">How It Works – 3 Simple Steps</h2>
      <div class="row">
        <div class="col-md-4 mb-4">
          <h3>Step 1 – Title</h3>
          <p>Write a short description explaining what happens in step 1.</p>
        </div>
        <div class="col-md-4 mb-4">
          <h3>Step 2 – Title</h3>
          <p>Write a short description explaining what happens in step 2.</p>
        </div>
        <div class="col-md-4 mb-4">
          <h3>Step 3 – Title</h3>
          <p>Write a short description explaining what happens in step 3.</p>
        </div>
      </div>
    </div>
  </section>
`;

const contactSection = `  <section id="contact">
    <div class="container">
      <div class="text-center mb-4">
        <h2>Get the Full Tutorial</h2>
        <p>Enter your info and I’ll send the complete lesson.</p>
      </div>
      <div id="contact_form">
        <form name="form1" id="ff" method="post" action="insert.php">
          <label>Name*: <input type="text" name="name" id="name" placeholder="Your full name" required></label>
          <label>City*: <input type="text" name="city" id="city" placeholder="Your city" required></label>
          <label>Phone: <input type="tel" name="phone" id="phone" placeholder="Your phone (optional)"></label>
          <label>Email*: <input type="email" name="email" id="email" placeholder="you@example.com" required></label>
          <input class="sendButton" type="submit" name="Submit" value="Send">
        </form>
      </div>
    </div>
  </section>
  <footer>&copy; 2025 Your Name – How-To Landing Page</footer>
`;

const scripts = `  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</body>
</html>`;

export const steps = [
  {
    id: 1,
    title: "Choose Your Skill",
    description: "Pick one simple skill you know and can explain in a few steps.",
    checklist: [
      "Pick a skill (e.g., Baking, Yoga, Tire Change)",
      "Write a title (e.g., 'Bake Your First Chocolate Cake')",
      "Write a one-sentence description"
    ],
    previewType: "code-preview",
    code: `${baseHead}</head>\n<body>\n${heroSection}    </div>\n  </section>\n${scripts}`
  },
  {
    id: 2,
    title: "Write 3 Simple Steps",
    description: "Break your skill into at least 3 steps.",
    checklist: [
      "Step 1: Title + 1-2 sentences",
      "Step 2: Title + 1-2 sentences",
      "Step 3: Title + 1-2 sentences",
      "Optional: Find images for each step"
    ],
    previewType: "code-preview",
    code: `${baseHead}</head>\n<body>\n${heroSection}    </div>\n  </section>\n${stepsSection}\n${scripts}`
  },
  {
    id: 3,
    title: "Plan Your Layout (Wireframe)",
    description: "Sketch three sections: Top (Hero), Middle (Steps), Bottom (Contact).",
    checklist: [
      "Hero: Title, Description, Carousel",
      "Steps Gallery: 3 boxes",
      "Contact Form: Heading, 'Why sign up', Fields"
    ],
    previewType: "code-preview",
    code: `${baseHead}</head>\n<body>\n${heroSection}${carouselSection}${stepsSection}${contactSection}${scripts}`
  },
  {
    id: 4,
    title: "Create Project Folder",
    description: "Set up your workspace in Visual Studio Code.",
    checklist: [
      "Create folder 'final-landing-page'",
      "Create index.html",
      "Create insert.php",
      "Add images"
    ],
    previewType: "folder"
  },
  {
    id: 5,
    title: "Edit Starter index.html",
    description: "Fill in the starter code with your content.",
    checklist: [
      "Update Page Title & Hero",
      "Replace Carousel Images",
      "Update Step Titles & Text",
      "Adjust Call-to-Action"
    ],
    previewType: "code-preview",
    code: `${baseHead}</head>\n<body>\n${heroSection}${carouselSection}${stepsSection}${contactSection}${scripts}`
  },
  {
    id: 6,
    title: "Style and Polish",
    description: "Use CSS to make it look professional.",
    checklist: [
      "Consistent fonts and colors",
      "Clear headings",
      "Responsive design (Laptop & Phone)",
      "Simple and readable"
    ],
    previewType: "code-preview",
    code: `${baseHead}${styleBlock}</head>\n<body>\n${heroSection}${carouselSection}${stepsSection}${contactSection}${scripts}`
  },
  {
    id: 7,
    title: "Upload to Host",
    description: "Deploy your site to a PHP-supported host.",
    checklist: [
      "Upload index.html, insert.php, images",
      "Test page load",
      "Test carousel",
      "Test form submission"
    ],
    previewType: "upload"
  },
  {
    id: 8,
    title: "Submit Your URL",
    description: "Submit your final project link.",
    checklist: [
      "Copy URL",
      "Submit for grading"
    ],
    previewType: "submit"
  }
];
