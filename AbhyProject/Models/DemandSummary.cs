using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AbhyProject.Models
{
    public class DemandSummary
    {
        public double AreaUnderMeasuresSP { get; set; }
        public double ProposedAreaSP { get; set; }
        public double TotalWaterDemandSP { get; set; }
        public double NetWaterDemandSP { get; set; }
        public double ReductionWaterDemandSP { get; set; }
        public double ApproxCostSP { get; set; }
        public double AreaUnderMeasuresDrip { get; set; }
        public double ProposedAreaDrip { get; set; }
        public double TotalWaterDemandDrip { get; set; }
        public double NetWaterDemandDrip { get; set; }
        public double ReductionWaterDemandDrip { get; set; }
        public double ApproxCostDrip { get; set; }

        public double AreaUnderMeasuresPipe { get; set; }
        public double ProposedAreaPipe { get; set; }
        public double TotalWaterDemandPipe { get; set; }
        public double NetWaterDemandPipe { get; set; }
        public double ReductionWaterDemandPipe { get; set; }
        public double ApproxCostPipe { get; set; }
        public double AreaUnderMeasuresCrop { get; set; }
        public double ProposedAreaCrop { get; set; }
        public double TotalWaterDemandCrop { get; set; }
        public double NetWaterDemandCrop { get; set; }
        public double ReductionWaterDemandCrop { get; set; }
        public double ApproxCostCrop { get; set; }
        public double AreaUnderMeasuresAny { get; set; }
        public double ProposedAreaAny { get; set; }
        public double TotalWaterDemandAny { get; set; }
        public double NetWaterDemandAny { get; set; }
        public double ReductionWaterDemandAny { get; set; }
        public double ApproxCostAny { get; set; }
    }
}