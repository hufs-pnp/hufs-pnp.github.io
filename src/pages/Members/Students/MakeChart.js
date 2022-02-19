import { Component, React } from 'react';
import Chart from 'react-google-charts';
import memberData from './memberData.json'

class MakeChart extends Component {
  render() {
    let i = 0
    let num_first_grade = 0
    let num_second_grade = 0
    let num_third_grade = 0
    let num_fourth_grade = 0

    let classof_fifteen = 0
    let classof_sixteen = 0
    let classof_seventeen = 0
    let classof_eighteen = 0
    let classof_nineteen = 0
    let classof_twenty = 0
    let classof_twentyone = 0

    let j = 0
    let num_ai = 0
    let num_game = 0
    let num_algorithm = 0
    let num_security = 0
    let num_data = 0
    let num_web = 0

    while (i < memberData.length) {
      if (memberData[i].grade === '1') {
        num_first_grade = num_first_grade + 1
      } else if (memberData[i].grade === '2') {
        num_second_grade = num_second_grade + 1
      } else if (memberData[i].grade === '3') {
        num_third_grade = num_third_grade + 1
      } else if (memberData[i].grade === '4') {
        num_fourth_grade = num_fourth_grade + 1
      }
      i = i + 1
    }

    i = 0
    while (i < memberData.length) {
      if (memberData[i].classof === '15학번') {
        classof_fifteen = classof_fifteen + 1
      } else if (memberData[i].classof === '16학번') {
        classof_sixteen = classof_sixteen + 1
      } else if (memberData[i].classof === '17학번') {
        classof_seventeen = classof_seventeen + 1
      } else if (memberData[i].classof === '18학번') {
        classof_eighteen = classof_eighteen + 1
      } else if (memberData[i].classof === '19학번') {
        classof_nineteen = classof_nineteen + 1
      } else if (memberData[i].classof === '20학번') {
        classof_twenty = classof_twenty + 1
      } else if (memberData[i].classof === '21학번') {
        classof_twentyone = classof_twentyone + 1
      }
      i = i + 1
    }

    i = 0
    while (i < memberData.length) {
      j = 0
      while (j < memberData[i].Team.length) {
        if (memberData[i].Team[j] === 'AI') {
          num_ai += 1
        } else if (memberData[i].Team[j] === 'DATA') {
          num_data += 1
        } else if (memberData[i].Team[j] === 'WEB') {
          num_web += 1
        } else if (memberData[i].Team[j] === '게임') {
          num_game += 1
        } else if (memberData[i].Team[j] === '알고리즘') {
          num_algorithm += 1
        } else if (memberData[i].Team[j] === '보안') {
          num_security += 1
        }
        j = j + 1
      }
      i = i + 1
    }
    return (
      <div class="flex flex-row ml-12 mr-20">
        <div class="">
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart...</div>}
            data={[
              ['Grade', 'Number'],
              ['1학년', num_first_grade],
              ['2학년', num_second_grade],
              ['3학년', num_third_grade],
              ['4학년', num_fourth_grade],
            ]}
            options={{
              title: 'Grade',
              colors: ['#4B088A', '#5F04B4', '#7401DF', '#8000FF'],
              fontSize: 13,
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        </div>
        <div class="">
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart...</div>}
            data={[
              ['ClassOf', 'Number'],
              ['15학번', classof_fifteen],
              ['16학번', classof_sixteen],
              ['17학번', classof_seventeen],
              ['18학번', classof_eighteen],
              ['19학번', classof_nineteen],
              ['20학번', classof_twenty],
              ['21학번', classof_twentyone],
            ]}
            options={{
              title: 'ClassOf',
              colors: [
                '#4B088A',
                '#5F04B4',
                '#7401DF',
                '#8000FF',
                '#9A2EFE',
                '#AC58FA',
                '#BE81F7',
              ],
              fontSize: 13,
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        </div>
        <div class="">
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart...</div>}
            data={[
              ['Team', 'Number'],
              ['AI', num_ai],
              ['게임', num_game],
              ['알고리즘', num_algorithm],
              ['보안', num_security],
              ['Data', num_data],
              ['Web', num_web],
            ]}
            options={{
              title: 'Team',
              colors: [
                '#4B088A',
                '#5F04B4',
                '#7401DF',
                '#8000FF',
                '#9A2EFE',
                '#AC58FA',
              ],
              fontSize: 13,
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        </div>
      </div>
    )
  }
}
export default MakeChart;

/*
class MakeChart extends Component {
  render() {
    let i = 0
    let num_first_grade = 0
    let num_second_grade = 0
    let num_third_grade = 0
    let num_fourth_grade = 0
    
    let classof_fifteen = 0
    let classof_sixteen = 0
    let classof_seventeen = 0
    let classof_eighteen = 0
    let classof_nineteen = 0
    let classof_twenty = 0
    let classof_twentyone = 0
    
    let j = 0
    let num_ai = 0
    let num_game = 0
    let num_algorithm = 0
    let num_security = 0
    let num_data = 0
    let num_web = 0

    while (i < memberData.length) {
      if (memberData[i].grade === '1') {
        num_first_grade = num_first_grade + 1
      } else if (memberData[i].grade === '2') {
        num_second_grade = num_second_grade + 1
      } else if (memberData[i].grade === '3') {
        num_third_grade = num_third_grade + 1
      } else if (memberData[i].grade === '4') {
        num_fourth_grade = num_fourth_grade + 1
      }
      i = i + 1
    }

    i = 0
    while (i < memberData.length) {
      if (memberData[i].classof === '15학번') {
        classof_fifteen = classof_fifteen + 1
      } else if (memberData[i].classof === '16학번') {
        classof_sixteen = classof_sixteen + 1
      } else if (memberData[i].classof === '17학번') {
        classof_seventeen = classof_seventeen + 1
      } else if (memberData[i].classof === '18학번') {
        classof_eighteen = classof_eighteen + 1
      } else if (memberData[i].classof === '19학번') {
        classof_nineteen = classof_nineteen + 1
      } else if (memberData[i].classof === '20학번') {
        classof_twenty = classof_twenty + 1
      } else if (memberData[i].classof === '21학번') {
        classof_twentyone = classof_twentyone + 1
      }
      i = i + 1
    }

    i = 0
    while (i < memberData.length) {
      j = 0
      while (j < memberData[i].Team.length) {
        if (memberData[i].Team[j] === 'AI') {
          num_ai += 1
        } else if (memberData[i].Team[j] === 'DATA') {
          num_data += 1
        } else if (memberData[i].Team[j] === 'WEB') {
          num_web += 1
        } else if (memberData[i].Team[j] === '게임') {
          num_game += 1
        } else if (memberData[i].Team[j] === '알고리즘') {
          num_algorithm += 1
        } else if (memberData[i].Team[j] === '보안') {
          num_security += 1
        }
        j = j + 1
      }
      i = i + 1

    }
    return (
      <div class="flex flex-row">
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="PieChart"
          loader={<div>Loading Chart...</div>}
          data={[
            ['Grade', 'Number'],
            ['1학년', num_first_grade],
            ['2학년', num_second_grade],
            ['3학년', num_third_grade],
            ['4학년', num_fourth_grade],
          ]}
          options={{
            title: 'Grade',
            colors: ['#4B088A', '#5F04B4', '#7401DF', '#8000FF'],
            fontSize: 13,
          }}
          rootProps={{ 'data-testid': '1' }}
        />
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="PieChart"
          loader={<div>Loading Chart...</div>}
          data={[
            ['ClassOf', 'Number'],
            ['15학번', classof_fifteen],
            ['16학번', classof_sixteen],
            ['17학번', classof_seventeen],
            ['18학번', classof_eighteen],
            ['19학번', classof_nineteen],
            ['20학번', classof_twenty],
            ['21학번', classof_twentyone],
          ]}
          options={{
            title: 'ClassOf',
            colors: [
              '#4B088A',
              '#5F04B4',
              '#7401DF',
              '#8000FF',
              '#9A2EFE',
              '#AC58FA',
              '#BE81F7',
            ],
            fontSize: 13,
          }}
          rootProps={{ 'data-testid': '1' }}
        />
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="PieChart"
          loader={<div>Loading Chart...</div>}
          data={[
            ['Team', 'Number'],
            ['AI', num_ai],
            ['게임', num_game],
            ['알고리즘', num_algorithm],
            ['보안', num_security],
            ['Data', num_data],
            ['Web', num_web],
          ]}
          options={{
            title: 'Team',
            colors: [
              '#4B088A',
              '#5F04B4',
              '#7401DF',
              '#8000FF',
              '#9A2EFE',
              '#AC58FA',
            ],
            fontSize: 13,
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    )
  }
}

export default MakeChart;
*/