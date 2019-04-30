import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import * as Pages from './pages/index.js';

import './App.css';

const page_list = ['Jennifer_Aniston', 'Michael_Jackson', 'Kim_Kardashian', 'Game_of_Thrones', 'Global_warming', 'The_Beatles', 'Michael_Jordan', 'Israel', 'France', 'Mark_Zuckerberg', 'One_Direction', 'List_of_highest_grossing_films', 'Justin_Bieber', 'Kanye_West', 'LeBron_James', 'Scarlett_Johansson', 'Muhammad_Ali', 'Abraham_Lincoln', 'Donald_Trump', 'Web_scraping', 'Rihanna', 'Albert_Einstein', 'Germany', 'September_11_attacks', 'William_Shakespeare', 'The_Big_Bang_Theory', 'Harry_Potter', 'United_States', 'Adele', 'Cristiano_Ronaldo', 'Canada', 'Halloween', 'Elvis_Presley', 'Lil_Wayne', 'Steve_Jobs', 'Charles_Manson', 'd', 'Elizabeth_II', 'Leonardo_DiCaprio', 'Eminem', 'e', 'List_of_Presidents_of_the_United_States', 'Star_Wars', 'Lady_Gaga', 'Lionel_Messi', 'AMGTV', 'Pablo_Escobar', 'London', 'Glee_TV_series', 'Barack_Obama', 'Miley_Cyrus', 'China', 'Selena_Gomez', 'Angelina_Jolie', 'Arnold_Schwarzenegger', 'World_War_I', 'Doctor_Who', 'World_War_II', 'Katy_Perry', 'John_F_Kennedy', 'Earth', 'John_Cena', 'Illuminati', 'Bruce_Lee', 'Vietnam_War', 'Malware', 'Freddie_Mercury', 'Breaking_Bad', 'Nicki_Minaj', 'Australia', 'Dwayne_Johnson', 'Prince_musician', 'Dog', 'Bill_Gates', 'India', 'Tupac_Shakur', 'Ariana_Grande', 'Mila_Kunis', 'Sexual_intercourse', 'The_Walking_Dead_TV_series', 'Singapore', 'Stephen_Hawking', 'l', 'Academy_Awards', 'How_I_Met_Your_Mother', 'United_Kingdom', 'IMDb', 'Darth_Vader', 'Adolf_Hitler', 'Japan', 'Jay_Z', 'Will_Smith', 'Tom_Cruise', 'Taylor_Swift', 'Sex', 'Johnny_Depp', 'A', 'Marilyn_Monroe'];

const routes = page_list.map((name) => {
    // return <div/>
    return <Route key={name} path={'/'+name} component={() => {
        // console.log(Pages);
        // return <object data="/public/HTML_Files/Barack_Obama.html"/>;
        // React.lazy(() => import('./OtherComponent'))
        return <div className="content" dangerouslySetInnerHTML={{__html: Pages[name]}}></div>
    }}/>
});

function App() {
    return (
        <BrowserRouter>
            <React.Fragment>
                {routes}
            </React.Fragment>
        </BrowserRouter>
    );
}

export default App;
