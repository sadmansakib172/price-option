import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const MathMarksData = [
        {"name": "Student 1", "math_marks": 85, "physics_marks": 78, "chemistry_marks": 92},
        {"name": "Student 2", "math_marks": 72, "physics_marks": 65, "chemistry_marks": 80},
        {"name": "Student 3", "math_marks": 91, "physics_marks": 87, "chemistry_marks": 94},
        {"name": "Student 4", "math_marks": 78, "physics_marks": 72, "chemistry_marks": 85},
        {"name": "Student 5", "math_marks": 94, "physics_marks": 89, "chemistry_marks": 96},
        {"name": "Student 6", "math_marks": 68, "physics_marks": 62, "chemistry_marks": 75},
        {"name": "Student 7", "math_marks": 88, "physics_marks": 84, "chemistry_marks": 91},
        {"name": "Student 8", "math_marks": 76, "physics_marks": 71, "chemistry_marks": 83},
        {"name": "Student 9", "math_marks": 90, "physics_marks": 85, "chemistry_marks": 92},
        {"name": "Student 10", "math_marks": 83, "physics_marks": 76, "chemistry_marks": 88}
      ]
    return (
        <div>
           <LChart width={800} height={400} data={MathMarksData}>
           <XAxis dataKey="name" />
           <YAxis />
            <Line dataKey='math_marks' stroke='red'></Line>
            <Line dataKey='physics_marks' stroke='yellow' ></Line>
            </LChart> 
        </div>
    );
};

export default LineChart;