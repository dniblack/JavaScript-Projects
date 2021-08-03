function Dictionary_Function() { // Named and defined the function which will be a dictionary in this case
    var Hero = { // named the varaible and created a "title" for the dictionary
        Name:"Cloud Strife　クラウド　ストライフ", // This is the name in both English and Japanese (Katakana) for reference
        DOB:"08/11/1986", // This is the date of birth for our "Hero";
        Age:21, // This is the age of our "Hero";
        Hoemtown:"Nibelheim", // This is the hometown of our "Hero";
        Weapon:"Buster Sword", // This is the favored weapon of our "Hero";
        Limit:"Blade-Beam", // This is the limit break of our "Hero"; this will be deleted;
        Class:"Vanguard", // This is the category that our "Hero" typically falls in when being organized amongst others;
        Limit_Break:"Omnislash", // This si the final learned skill of our "Hero";
    };
    delete Hero.Limit; // I am deleting the value of Hero.Limit
    document.getElementById("Dictionary").innerHTML = Hero.Limit; // // giving the the value a tag "Dictionary" so that it can be
    // that can be pulled from here from the HTML; I am also calling forth the value of "Hero.Limit" but since it will be deleted, it will appear as "undefined"
}
