import React from 'react';
import { Route } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About/About';
import About_history from './pages/About/About_history';
import About_leader from './pages/About/About_leader';
import About_activity from './pages/About/About_activity';
import About_professor from './pages/About/About_professor';
import Achievements from './pages/Achievement/Achievements';
import Members from './pages/Members/Members';
import Recruit from './pages/Recruit';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog/Blog';
import Graduates from './pages/Members/Graduate/Graduates'
import Blog_web from './pages/Blog/Blog_web';
import Blog_data from './pages/Blog/Blog_data';
import Blog_ai from './pages/Blog/Blog_ai';
import Blog_game from './pages/Blog/Blog_game';

const App = () => {
  return (
    <div>
      <Route path="/" component={Index} exact />
      <Route path="/about" component={About} />
      <Route path="/about_history" component={About_history} />
      <Route path="/about_leader" component={About_leader} />
      <Route path="/about_activity" component={About_activity} />
      <Route path="/about_professor" component={About_professor} />
      <Route path="/achievements" component={Achievements} />
      <Route path="/members" component={Members} />
      <Route path="/graduates" component={Graduates} />
      <Route path="/recruit" component={Recruit} />
      <Route path="/FAQ" component={FAQ} />
      <Route path="/Blog" component={Blog} />
      <Route path="/Blog_web" component={Blog_web} />
      <Route path="/Blog_data" component={Blog_data} />
      <Route path="/Blog_ai" component={Blog_ai} />
      <Route path="/Blog_game" component={Blog_game} />
    </div>
  )
};

export default App;
