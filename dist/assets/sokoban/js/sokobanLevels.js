//the level data

var firstLevelString = ["########",
						"#.######",
						"#*$@$-.#",
						"#------#",
						"########"];

var secondLevelString = ["########",
						"#------#",
						"#------#",
						"#--##$-#",
						"#$$-#@-#",
						"#--$#--#",
						"#.-.#..#",
						"########"];
						
var thirdLevelString =  ["##########",
						"#@-#-----#",
						"#-$-$--$-#",
						"#---#-#--#",
						"#--#..-#-#",
						"#-$-.*---#",
						"#----###-#",
						"#-##-##--#",
						"#----##-.#",
						"##########"];
						
var fourthLevelString = ["###########",
						"#----#----#",
						"#--$---$#@#",
						"#-$-#...--#",
						"#---#######",
						"###########"];
						
var fifthLevelString = ["######",
					    "#----#",
					    "#-#@-#",
					    "#$$*-#",
					    "#-.*-#",
					    "#.-*-#",
					    "######"];

var sixthLevelString = ["###########",
						"#---#-----#",
						"#---#-----#",
						"#---#-#.--#",
						"#---#.#---#",
						"#--$#-##$-#",
						"#--------@#",
						"##$$#-###-#",
						"#-------..#",
						"###########"];
						
var seventhLevelString = ["###########",
						  "#-----@---#",
						  "#----$.---#",
						  "#####$-##-#",
						  "#.----.$--#",
						  "###########"];

var eighthLevelString =  ["########",
						  "#-@#####",
						  "#-----##",
						  "#-.#.--#",
						  "#-$$$$-#",
						  "#-.-.-##",
						  "#----###",
						  "########"];
						  
var ninthLevelString =   ["#--###-#",
						  "-###@-#-",
						  "-#----#-",
						  "##$#..-#",
						  "#--$-#-#",
						  "#-#-$--#",
						  "#-..#$#-",
						  "##----#-",
						  "-#--###-",
						  "#-####-#"];
						  
var tenthLevelString =   ["###########",
						  "#@.-.$.---#",
						  "#$.$$-##--#",
						  "#--.---#$-#",
						  "#-$$.#$---#",
						  "#-*--#.---#",
						  "#.-#.$-.--#",
						  "#--#*-$$.-#",
						  "#-*-----$.#",
						  "###########"];

						  


						

var levelsAsStrings = [firstLevelString,
					   secondLevelString,
					   thirdLevelString,
					   fourthLevelString,
					   fifthLevelString,
					   sixthLevelString,
					   seventhLevelString,
					   eighthLevelString,
					   ninthLevelString,
					   tenthLevelString];
var mySokobanLevels = [];
var levelMasters = [];




// first split the level into an array of arrays
function splitLevelData(level)
	{
	var levelArray = [];
	for ( i = 0; i < level.length; i++ )
		{
		levelArray[i] = level[i].split("");
		}
	
	mySokobanLevels.push(levelArray);
	}
	
// then create the master file of that level; the level without the moving pieces
function createMaster(level)
	{
	var myClone = JSON.parse(JSON.stringify(level));
	for ( i = 0; i < myClone.length; i++ )
		{
		for ( j = 0; j < myClone[i].length; j++ )
			{
			if ( myClone[i][j] === "@" || myClone[i][j] === "$")
				{
				myClone[i][j] = "-";
				}
			else if ( myClone[i][j] === "*")
				{
				myClone[i][j] = ".";
				}
			}
		}
	levelMasters.push(myClone);
	}

function createLevelArrays()
	{
	var a = 0;
	var b = levelsAsStrings.length;
	while (a < b)
		{
		splitLevelData(levelsAsStrings[a]);
		createMaster(mySokobanLevels[a]);
		a = a + 1;
		}
	}
			