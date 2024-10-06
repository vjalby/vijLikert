likertplotClass <- if (requireNamespace('jmvcore', quietly=TRUE)) R6::R6Class(
    "likertplotClass",
    inherit = likertplotBase,
    private = list(
      .init = function() {
          # Set the size of the plot
          image <- self$results$plot
          image$setSize(self$options$plotW, self$options$plotH)
      },
      .run = function() {
          if( length( self$options$liks) > 1  ) {
              plotData <- self$data[c(self$options$liks, self$options$group)]
              image <- self$results$plot
              image$setState(plotData)
          }
      },
    .plot = function(image, ggtheme, theme, ...) {  # <-- the plot function
        if( length( self$options$liks) < 2  )
            return(FALSE)
        plotData <- image$state
        textSize = self$options$textSize
        if( self$options$type == 'centered' ) {
            # Group setup
            if( ! is.null(self$options$group) ) {
                if( self$options$groupBy == "variable" ) { 
                    yOption <- self$options$group
                    facetRows <- vars(.question)
                } else {
                    yOption <- ".question"
                    facetRows <- self$options$group
                }
            } else {
                yOption <- ".question"
                facetRows <- NULL            
            }
            # Do Likert Plot (centered)
            plot <- ggstats::gglikert(plotData, include = self$options$liks,
                                      sort = self$options$sorting, 
                                      add_labels = self$options$addLabels, 
                                      labels_size = (textSize/12)*3.5,
                                      add_totals = self$options$addTotals, 
                                      reverse_likert = self$options$reverseLikert,
                                      y = yOption, facet_rows = facetRows)
      } else {
          # Group setup
          if( ! is.null(self$options$group) ) {
              if( self$options$groupBy == "variable" ) { 
                  yOption <- self$options$group
                  facetRows <- vars(.question)
              } else {
                  yOption <- ".question"
                  facetRows <- self$options$group
              }
          } else {
              yOption <- ".question"
              facetRows <- NULL            
          }
          # Do Likert Plot (stacked)
          plot <- ggstats::gglikert_stacked(plotData, include = self$options$liks,
                                        sort = self$options$sorting,
                                        add_labels = self$options$addLabels,
                                        labels_size = (textSize/12)*3.5,
                                        add_median_line = self$options$addMedianLine, 
                                        reverse_fill = ! self$options$reverseLikert,
                                        y = yOption) + facet_grid(rows = facetRows)
      }
      plot <- plot + theme(text = element_text(size=textSize)) + scale_fill_brewer(palette = self$options$plotColor)
    })
)
