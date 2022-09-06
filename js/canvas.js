const ctx=document.getElementById('bar_chart').getContext('2d');
const bar_chart = new Chart(ctx, {
type: 'bar',
data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat','Sun'],
    datasets: [{
        label: 'USD $',
        data: [17.45,34.91, 52.36,31.07, 23.39, 43.28, 25.48],
        backgroundColor: [
            'rgba(228, 73, 31, 0.8)',
            'rgba(228, 73, 31, 0.9)',
            'rgba(163, 221, 215, 0.8)',
            'rgba(228, 73, 31, 0.7)',
            'rgba(228, 73, 31, 0.7)',
            'rgba(228, 73, 31, 0.8)',
            'rgba(228, 73, 31, 0.9)'
        ],
        borderColor: [
            'rgba(228, 73, 31, 1)',
            'rgba(228, 73, 31, 1)',
            'rgba(163, 221, 215, 1)',
            'rgba(228, 73, 31, 1)',
            'rgba(228, 73, 31, 1)',
            'rgba(228, 73, 31, 1)',
            'rgba(228, 73, 31, 1)'
        ],
        borderWidth: 1
    }]
},
options: {
    scales: {
        x:{
            grid:{
                display:false
            }
        },
        y: {
            beginAtZero: true,
            ticks:{
                    display:false,
            },
            grid:{
                    display:false,
                    drawTicks:true,
                    drawOnChartArea:false,
            }
        }
    }
}
});        