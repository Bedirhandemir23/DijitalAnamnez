document.addEventListener("DOMContentLoaded", () => {
    const anamnezData = [
        {
            date: "2024-06-10",
            name: "Ali Veli",
            gender: "Erkek",
            age: 30,
            complaint: "Gece Ağrısı",
            diseases: ["Kalp hastalıkları"],
            medications: "Aspirin",
            treatment: "Dolgu",
            treatmentDescription: "Dolgu yapıldı."
        },
        {
            date: "2024-06-11",
            name: "Ayşe Yılmaz",
            gender: "Kadın",
            age: 25,
            complaint: "Hassasiyet",
            diseases: ["Şeker hastalığı"],
            medications: "İnsülin",
            treatment: "Kanal Tedavisi",
            treatmentDescription: "Kanal tedavisi uygulandı."
        },
        {
            date: "2024-06-12",
            name: "Mehmet Can",
            gender: "Erkek",
            age: 40,
            complaint: "Spontan Ağrı",
            diseases: [],
            medications: "Parasetemol",
            treatment: "Çekim",
            treatmentDescription: "Diş çekildi."
        },
        {
            date: "2024-06-13",
            name: "Elif Demir",
            gender: "Kadın",
            age: 35,
            complaint: "Fistül Ağzı",
            diseases: ["Kalp hastalıkları", "Şeker hastalığı"],
            medications: "Aspirin, İnsülin",
            treatment: "Fissür Örtücü",
            treatmentDescription: "Fissür örtücü uygulandı."
        }
        ,{
            date: "2024-06-13",
            name: "Elif Demir",
            gender: "Kadın",
            age: 35,
            complaint: "Fistül Ağzı",
            diseases: ["Kalp hastalıkları", "Şeker hastalığı"],
            medications: "Aspirin, İnsülin",
            treatment: "Fissür Örtücü",
            treatmentDescription: "Fissür örtücü uygulandı."
        }
        // Daha fazla veri eklenebilir
    ];
    document.addEventListener("DOMContentLoaded", () => {
        // Daha önceki kodlar buraya taşındı
    
        // Anamnez verilerini localStorage'dan al ve dashboard'a ekle
        const anamnezDataString = localStorage.getItem('anamnezData');
        if (anamnezDataString) {
            const anamnezData = JSON.parse(anamnezDataString);
            const tbody = document.getElementById("anamnez-data");
            anamnezData.forEach(data => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${data.date}</td>
                    <td>${data.name}</td>
                    <td>${data.gender}</td>
                    <td>${data.age}</td>
                    <td>${data.complaint}</td>
                    <td>${data.diseases.join(", ")}</td>
                    <td>${data.medications}</td>
                    <td>${data.treatment}</td>
                    <td>${data.treatmentDescription}</td>
                `;
                tbody.appendChild(tr);
            });
    // Grafikleri güncelle
            const chartData = updateCharts(anamnezData);
            updateGenderChart(chartData.genderData);
            updateAgeChart(chartData.ageData);
            updateTreatmentChart(chartData.treatmentData);
            updateComplaintChart(chartData.complaintData);
            updateMedicationsChart(chartData.medicationsData);
            updateDiseasesChart(chartData.diseasesData);
        }
        
        // Daha önceki kodlar buraya taşındı
    
    });
    
    function updateGenderChart(genderData) {
        // Önceki kodlar buraya taşındı
    }
    
    function updateAgeChart(ageData) {
        // Önceki kodlar buraya taşındı
    }
    
    function updateTreatmentChart(treatmentData) {
        // Önceki kodlar buraya taşındı
    }
    
    function updateComplaintChart(complaintData) {
        // Önceki kodlar buraya taşındı
    }
    
    function updateMedicationsChart(medicationsData) {
        // Önceki kodlar buraya taşındı
    }
    
    function updateDiseasesChart(diseasesData) {
        // Önceki kodlar buraya taşındı
    }
    

    const tbody = document.getElementById("anamnez-data");
    anamnezData.forEach(data => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${data.date}</td>
            <td>${data.name}</td>
            <td>${data.gender}</td>
            <td>${data.age}</td>
            <td>${data.complaint}</td>
            <td>${data.diseases.join(", ")}</td>
            <td>${data.medications}</td>
            <td>${data.treatment}</td>
            <td>${data.treatmentDescription}</td>
        `;
        tbody.appendChild(tr);
    });

    const genderData = anamnezData.reduce((acc, data) => {
        acc[data.gender] = (acc[data.gender] || 0) + 1;
        return acc;
    }, {});

    const ageData = anamnezData.reduce((acc, data) => {
        acc[data.age] = (acc[data.age] || 0) + 1;
        return acc;
    }, {});

    const treatmentData = anamnezData.reduce((acc, data) => {
        acc[data.treatment] = (acc[data.treatment] || 0) + 1;
        return acc;
    }, {});

    const complaintData = anamnezData.reduce((acc, data) => {
        acc[data.complaint] = (acc[data.complaint] || 0) + 1;
        return acc;
    }, {});

    const medicationsData = anamnezData.reduce((acc, data) => {
        data.medications.split(', ').forEach(med => {
            acc[med] = (acc[med] || 0) + 1;
        });
        return acc;
    }, {});

    const diseasesData = anamnezData.reduce((acc, data) => {
        data.diseases.forEach(disease => {
            acc[disease] = (acc[disease] || 0) + 1;
        });
        return acc;
    }, {});

    new Chart(document.getElementById('genderChart'), {
        type: 'pie',
        data: {
            labels: Object.keys(genderData),
            datasets: [{
                data: Object.values(genderData),
                backgroundColor: ['#FF914D', '#E45D56']
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Cinsiyet Dağılımı'
            }
        }
    });

    new Chart(document.getElementById('ageChart'), {
        type: 'bar',
        data: {
            labels: Object.keys(ageData),
            datasets: [{
                data: Object.values(ageData),
                backgroundColor: '#87095E'
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Yaş Dağılımı'
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Yaş'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Hasta Sayısı'
                    }
                }
            }
        }
    });

    new Chart(document.getElementById('treatmentChart'), {
        type: 'bar',
        data: {
            labels: Object.keys(treatmentData),
            datasets: [{
                data: Object.values(treatmentData),
                backgroundColor: '#4B0056'
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Yapılan Tedaviler'
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Tedavi Türü'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Uygulama Sayısı'
                    }
                }
            }
        }
    });

    new Chart(document.getElementById('complaintChart'), {
        type: 'bar',
        data: {
            labels: Object.keys(complaintData),
            datasets: [{
                data: Object.values(complaintData),
                backgroundColor: '#373050'
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Hastaların Geliş Sebepleri'
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Geliş Sebebi'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Hasta Sayısı'
                    }
                }
            }
        }
    });

    new Chart(document.getElementById('medicationsChart'), {
        type: 'bar',
        data: {
            labels: Object.keys(medicationsData),
            datasets: [{
                data: Object.values(medicationsData),
                backgroundColor: '#FF914D'
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Kullanılan İlaçlar'
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'İlaç'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Kullanım Sayısı'
                    }
                }
            }
        }
    });

    new Chart(document.getElementById('diseasesChart'), {
        type: 'bar',
        data: {
            labels: Object.keys(diseasesData),
            datasets: [{
                data: Object.values(diseasesData),
                backgroundColor: '#E45D56'
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Sistemik Hastalıklar'
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Hastalık'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Hasta Sayısı'
                    }
                }
            }
        }
    });

    const mostCommonTreatments = Object.entries(treatmentData).sort((a, b) => b[1] - a[1]).slice(0, 3);
    document.getElementById('most-common-treatments').innerText = mostCommonTreatments.map(t => `${t[0]}: ${t[1]} kez`).join(', ');

});

function applyFilter() {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const rows = document.querySelectorAll("#anamnez-data tr");
    rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        let matches = false;
        cells.forEach(cell => {
            if (cell.textContent.toLowerCase().includes(searchValue)) {
                matches = true;
            }
        });
        if (matches) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}
document.addEventListener("DOMContentLoaded", () => {
    // Önceki kodlar buraya taşındı

    new Chart(document.getElementById('lineChart'), {
        type: 'line',
        data: {
            labels: Object.keys(ageData),
            datasets: [{
                label: 'Yaş Dağılımı',
                data: Object.values(ageData),
                fill: false,
                borderColor: '#87095E',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Yaş'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Hasta Sayısı'
                    }
                }
            }
        }
    });

    new Chart(document.getElementById('pieChart'), {
        type: 'pie',
        data: {
            labels: Object.keys(genderData),
            datasets: [{
                data: Object.values(genderData),
                backgroundColor: ['#FF914D', '#E45D56']
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Cinsiyet Dağılımı'
            }
        }
    });

    new Chart(document.getElementById('barChart'), {
        type: 'bar',
        data: {
            labels: Object.keys(treatmentData),
            datasets: [{
                label: 'Yapılan Tedaviler',
                data: Object.values(treatmentData),
                backgroundColor: '#4B0056'
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Tedavi Türü'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Uygulama Sayısı'
                    }
                }
            }
        }
    });

    // Diğer kodlar buraya taşındı

});

document.addEventListener("DOMContentLoaded", () => {
    // Daha önceki kodlar buraya taşındı

    // Anamnez verilerini localStorage'dan al ve dashboard'a ekle
    const anamnezDataString = localStorage.getItem('anamnezData');
    if (anamnezDataString) {
        const anamnezData = JSON.parse(anamnezDataString);
        const tbody = document.getElementById("anamnez-data");
        anamnezData.forEach(data => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${data.date}</td>
                <td>${data.name}</td>
                <td>${data.gender}</td>
                <td>${data.age}</td>
                <td>${data.complaint}</td>
                <td>${data.diseases.join(", ")}</td>
                <td>${data.medications}</td>
                <td>${data.treatment}</td>
                <td>${data.treatmentDescription}</td>
            `;
            tbody.appendChild(tr);
        });
    }
    
    // Daha önceki kodlar buraya taşındı

});



 

document.addEventListener('DOMContentLoaded', () => {
    const anamnezForm = document.getElementById('anamnez-form');
    const dashboardContainer = document.getElementById('dashboard-container');
    const dataTable = document.getElementById('data-table').querySelector('tbody');
    const treatmentChart = document.getElementById('treatment-chart').getContext('2d');
    const addNewButton = document.getElementById('add-new');

    const anamnezContainer = document.getElementById('anamnez-container');

    // Ekle butonuna tıklandığında anamnez formuna yönlendirme
    addNewButton.addEventListener('click', () => {
        anamnezContainer.style.display = 'block';
        dashboardContainer.style.display = 'none';
    });

    anamnezForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(anamnezForm);
        const data = {};
        formData.forEach((value, key) => {
            if (key === 'diseases') {
                if (!data[key]) {
                    data[key] = [];
                }
                data[key].push(value);
            } else {
                data[key] = value;
            }
        });

        addDataToTable(data);
        updateChart(data.treatment);

        anamnezForm.reset();
        anamnezContainer.style.display = 'none';
        dashboardContainer.style.display = 'block';
    });

    function addDataToTable(data) {
        const row = dataTable.insertRow();
        row.insertCell(0).textContent = data.date;
        row.insertCell(1).textContent = `${data['first-name']} ${data['last-name']}`;
        row.insertCell(2).textContent = data.gender;
        row.insertCell(3).textContent = data.age;
        row.insertCell(4).textContent = data.complaint;
        row.insertCell(5).textContent = (data.diseases || []).join(', ');
        row.insertCell(6).textContent = data.medications;
        row.insertCell(7).textContent = data.treatment;
        row.insertCell(8).textContent = data['treatment-description'];

        const deleteCell = row.insertCell(9);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Sil';
        deleteButton.addEventListener('click', () => {
            row.remove();
            updateChart();
        });
        deleteCell.appendChild(deleteButton);
    }

    const chartData = {
        labels: ['Dolgu', 'Çekim', 'Kanal Tedavisi', 'Fissür Örtücü', 'Kuafaj', 'Pulpotomi', 'Apikal Rezeksiyon', 'Rt'],
        datasets: [{
            label: 'Yapılan Tedaviler',
            data: [0, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: ['#FF914D', '#E45D56', '#87095E', '#4B0056', '#373050', '#FF914D', '#E45D56', '#87095E'],
        }]
    };

    const chartConfig = {
        type: 'bar',
        data: chartData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    const treatmentChartInstance = new Chart(treatmentChart, chartConfig);

    function updateChart(treatment) {
        if (treatment) {
            const index = chartData.labels.indexOf(treatment);
            if (index !== -1) {
                chartData.datasets[0].data[index]++;
            }
        } else {
            chartData.datasets[0].data.fill(0);
            Array.from(dataTable.rows).forEach(row => {
                const treatment = row.cells[7].textContent;
                const index = chartData.labels.indexOf(treatment);
                if (index !== -1) {
                    chartData.datasets[0].data[index]++;
                }
            });
        }
        treatmentChartInstance.update();
    }
});

addNewButton.addEventListener('click', () => {
    window.location.href = 'anamnez.html'; // Anamnez sayfasına yönlendir
});