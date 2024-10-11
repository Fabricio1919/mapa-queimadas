// src/components/Graficos/GraficoPizzaEstado.tsx
import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Pie } from "react-chartjs-2";
import { Queimada } from "../../mock/QueimadasData";

interface GraficoEstadoProps {
  queimada: Queimada;
}

const GraficoEstado: React.FC<GraficoEstadoProps> = ({ queimada }) => {
  const generatePieChartData = () => {
    return {
      labels: queimada.municipios.map((municipio) => municipio.nome),
      datasets: [
        {
          data: queimada.municipios.map((municipio) => municipio.quantidade),
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#9966FF",
            "#FF9F40",
          ],
        },
      ],
    };
  };

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      bgGradient="linear(to-br, #f7fafc, #e2e8f0)"
      textAlign="center"
    >
      <Text fontWeight="bold" fontSize="lg" color="teal.600">
        {queimada.estado}
      </Text>
      <Box height="300px" width="300px" mx="auto">
        <Pie data={generatePieChartData()} />
      </Box>
    </Box>
  );
};

export default GraficoEstado;