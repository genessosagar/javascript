const getSleepHours = day => {
    day = day.toLowerCase();
    switch (day) {
      case 'monday':
        return 8;
      case 'tuesday':
        return 8;
      case 'wednesday':
        return 8;
      case 'thursday':
        return 8;
      case 'friday':
        return 7;
      case 'saturday':
        return 8;
      case 'sunday':
        return 8;
    };
  };
  
  // Single line function definition
  const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  
  const getIdealSleepHours = () => {
    const idealHours = (8 * 7);
    return idealHours;
  };
  
  console.log(getActualSleepHours());
  console.log(getIdealSleepHours());
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      return 'You got perfect sleep';
    }
    else if (actualSleepHours > idealSleepHours) {
      console.log('You got more sleep of ' + (actualSleepHours - idealSleepHours));
      return 'You got more sleep';
    }
    else if (actualSleepHours < idealSleepHours) {
      console.log('You got less sleep of ' + (idealSleepHours - actualSleepHours));
      return 'You lack sleep';
    }
  };
  
  console.log(calculateSleepDebt());