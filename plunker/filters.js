/*$scope.userFilter = function (company) {
        
        var includedPositions= $scope.positionsIncluded;
        var includedMajors = $scope.majorsIncluded;
        
        if(includedMajors.length <= 0 && includedPositions.length <= 0) return company;
        if(includedPositions.length <= 0) includedPositions = ["fte","intern","coop","msphd"];
        if(includedMajors.length <= 0) includedMajors = ["am","bme","chem","civil","ce","cs","ee","enve","ie","made","matsci","mech","noneng"];

        
        for (var i = 0; i < includedPositions.length; i++)
        {
            // check if a position is true
            if(company[includedPositions[i]])
            {
                // must have at least one of these true as well
                for (var j = 0; j < includedMajors.length; j++) 
                { if(company[includedMajors[j]]) return company; }
            }
        }
        return;
    }
    */
// }]);